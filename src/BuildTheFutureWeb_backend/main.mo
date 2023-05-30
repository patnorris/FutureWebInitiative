import Principal "mo:base/Principal";
import Text "mo:base/Text";
import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";
import Nat64 "mo:base/Nat64";
import Int "mo:base/Int";
import Time "mo:base/Time";
import List "mo:base/List";

import Types "./Types";
import HTTP "./Http";

shared actor class BuildTheFutureWeb(custodian: Principal) = Self {
  
  stable var custodians = List.make<Principal>(custodian);

// TODO: instead add functions to manage cycles balance and gather stats
  public func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };

  stable var emailSubscribersStorageStable : [(Text, Types.EmailSubscriber)] = [];
  var emailSubscribersStorage : HashMap.HashMap<Text, Types.EmailSubscriber> = HashMap.HashMap(0, Text.equal, Text.hash);

  func putEmailSubscriber(emailSubscriber : Types.EmailSubscriber) : Text {
    emailSubscribersStorage.put(emailSubscriber.emailAddress, emailSubscriber);
    return emailSubscriber.emailAddress;
  };

  func getEmailSubscriber(emailAddress : Text) : ?Types.EmailSubscriber {
    let result = emailSubscribersStorage.get(emailAddress);
    return result;
  };

  public func submitSignUpForm(submittedSignUpForm : Types.SignUpFormInput) : async Text {
    switch(getEmailSubscriber(submittedSignUpForm.emailAddress)) {
      case null {
        let emailSubscriber : Types.EmailSubscriber = {
          emailAddress: Text = submittedSignUpForm.emailAddress;
          pageSubmittedFrom: Text = submittedSignUpForm.pageSubmittedFrom;
          subscribedAt: Nat64 = Nat64.fromNat(Int.abs(Time.now()));
        };
        let result = putEmailSubscriber(emailSubscriber);
        if (result != emailSubscriber.emailAddress) {
          return "There was an error signing up. Please try again.";
        };
        return "Successfully signed up!";
      };
      case _ { return "Already signed up!"; };
    };  
  };

  // TODO: Function for custodian to get all email subscribers
  public shared({ caller }) func getEmailSubscribers() : async [(Text, Types.EmailSubscriber)] {
    if (List.some(custodians, func (custodian : Principal) : Bool { custodian == caller })) {
      return Iter.toArray(emailSubscribersStorage.entries());
    };
    return [];
  };

  // Function for custodian to delete an email subscriber
  public shared({ caller }) func deleteEmailSubscriber(emailAddress : Text) : async Bool {
    if (List.some(custodians, func (custodian : Principal) : Bool { custodian == caller })) {
      emailSubscribersStorage.delete(emailAddress);
      return true;
    };
    return false;
  };

  // Upgrade Hooks
  system func preupgrade() {
    emailSubscribersStorageStable := Iter.toArray(emailSubscribersStorage.entries());
  };

  system func postupgrade() {
    emailSubscribersStorage := HashMap.fromIter(Iter.fromArray(emailSubscribersStorageStable), emailSubscribersStorageStable.size(), Text.equal, Text.hash);
    emailSubscribersStorageStable := [];
  };

// HTTP interface
  /* public query func http_request(request : HTTP.Request) : async HTTP.Response {
    //Debug.print(debug_show("http_request test"));
    //Debug.print(debug_show(request));
    if (Text.contains(request.url, #text("tokenid"))) { // endpoint for Stoic Wallet/Entrepot
      let tokenId = Iter.toArray(Text.tokens(request.url, #text("tokenid=")))[1];
      let { index } = Stoic.decodeToken(tokenId);
      let item = List.get(nfts, Nat32.toNat(index));
      switch (item) {
        case (null) {
          let response = {
            body = Text.encodeUtf8("Invalid tokenid");
            headers = [];
            status_code = 404 : Nat16;
            streaming_strategy = null;
            upgrade = false;
          };
          return(response);
        };
        case (?token) {
          let body = token.metadata[0].data;
          let response = {
            body = body;
            headers = [("Content-Type", "text/html"), ("Content-Length", Nat.toText(body.size()))];
            status_code = 200 : Nat16;
            streaming_strategy = null;
            upgrade = false;
          };
          return(response);
        };
      };
    } else if (Text.contains(request.url, #text("spaceId"))) {
      let spaceId = Iter.toArray(Text.tokens(request.url, #text("spaceId=")))[1];
      let item = List.get(nfts, textToNat(spaceId));
      switch (item) {
        case (null) {
          let response = {
            body = Text.encodeUtf8("Invalid spaceId");
            headers = [];
            status_code = 404 : Nat16;
            streaming_strategy = null;
            upgrade = false;
          };
          return(response);
        };
        case (?token) {
          let body = token.metadata[0].data;
          let response = {
            body = body;
            headers = [("Content-Type", "text/html"), ("Content-Length", Nat.toText(body.size()))];
            status_code = 200 : Nat16;
            streaming_strategy = null;
            upgrade = false;
          };
          return(response);
        };
      };
    } else {
      return {
        upgrade = false; // ← If this is set to true, the request will be sent to http_request_update()
        status_code = 200;
        headers = [ ("content-type", "text/plain") ];
        body = "It does not work";
        streaming_strategy = null;
      };
    };
  }; */

};
