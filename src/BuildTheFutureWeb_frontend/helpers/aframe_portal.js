AFRAME.registerComponent('neighbor-portal', {
  schema: {
    url: { default: 'https://aframe.io' },
    text: { default: '' },
    width: { default: 1.5 },
    height: { default: 2.4 },
    frameWidth: { default: 0.15 },
    enableFrame: { default: true },
  },

  init: function () {
    const el = this.el;
    const data = this.data;
    const scene = this.el.sceneEl;

    el.object3D.position.y += data.height / 2;

    var iframe;

    el.setAttribute('geometry', { primitive: 'plane', width: data.width, height: data.height });
    //el.setAttribute('material', { color: '' });

    iframe = document.createElement('iframe');
    iframe.src = data.url;
    const iframeId = `iframe_${Math.floor(Math.random() * 1000)}`;
    iframe.id = iframeId;
    document.body.appendChild(iframe);

    //iframe.style.position = 'fixed';
    //iframe.style.top = '0';
    //iframe.style.left = '0';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.overflow = 'none';

    iframe.style.zIndex = 10;
    //iframe.style.display = 'none';
    el.appendChild(iframe);

    console.log("########################################iframe");
    console.log(iframe);
    /* console.log(iframe.contentWindow);
    console.log(iframe.contentWindow.document);
    console.log(iframe.contentWindow.document.body);
    console.log(iframe.contentWindow.document.body.innerHTML);
    console.log("########################################iframe");
    console.log(window.frames);
    console.log(window.frames[iframeId]);
    console.log(window.frames[iframeId].contentDocument); */

    /* var $iframe = $(`#${iframeId}`);
    console.log($iframe);
    console.log($iframe.contents());
    console.log($iframe.contents().find("body"));
    console.log($iframe.contents().find("body").html());
    console.log($iframe.contents().find("body").html()[0]); */

    const captureDiv = document.createElement('div');
    captureDiv.style.padding = "10px";
    captureDiv.style.background = "#f5da55";
    const para = document.createElement("p");
    para.innerText = "This is a paragraph";
    captureDiv.appendChild(para);

    //captureDiv.appendChild(iframe);
    
    console.log("###################captureDiv");
    //console.log(captureDiv);

    /* html2canvas(captureDiv).then(canvas => {
      console.log("###################html2canvas");
      console.log(canvas);
      var dataUrl = canvas.toDataURL();
      console.log(dataUrl);
      el.src = dataUrl;
    }); */
    //console.log(document.body);

    /* html2canvas(iframe, {
      allowTaint : true,
      logging: true,
      profile: true,
      useCORS: true,
      onrendered: function (canvas) {
        console.log("###################html2canvas onrendered");
        console.log(canvas);
        var dataUrl = canvas.toDataURL();
        console.log(dataUrl);
        //el.src = dataUrl;
        let mesh = el.getObject3D("mesh");
        const texture = new THREE.CanvasTexture(canvas);
        console.log(texture);
        let textureToBeRemoved = mesh.material.map;
        mesh.material.map = texture;
        //if (textureToBeRemoved) textureToBeRemoved.dispose();
        //el.setAttribute('material', { map: this.texture });
        //el.setAttribute('material', { src: 'url(' + dataUrl + ')' });
        //el.setAttribute('src', 'url(' + dataUrl + ')');
        //document.querySelector('a-sky').setAttribute('src', 'url(' + dataUrl + ')');
        //document.querySelector('a-sky').setAttribute('material', { src: 'url(' + dataUrl + ')' });
      }
    }); */
    /* html2canvas(iframe).then(function(canvas) {
      console.log("###################html2canvas onrendered");
      console.log(canvas);
      console.log(el);
      console.log(data);
      var dataUrl = canvas.toDataURL();
      //console.log(dataUrl);
      //el.src = dataUrl;
      let mesh = el.getObject3D("mesh");
      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = THREE.ClampToEdgeWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;
      texture.minFilter = THREE.LinearFilter;
      console.log(texture);
      data.iframetexture = texture;
      console.log(data);
      let textureToBeRemoved = mesh.material.map;
      mesh.material.map = texture;
      mesh.material.renderOrder = 1;
      mesh.material.needsUpdate = true;
      //el.setAttribute('src', 'url(' + dataUrl + ')');
      if (textureToBeRemoved) textureToBeRemoved.dispose();
    }); */

    // Create a function to handle the iframe content when received
    function handleIframeContent(event) {
      console.log("###################handleIframeContent", event);
      if (event.data.type === 'iframeContent') {
        const iframeContent = event.data.content;

        // Create a temporary div to hold the iframe content
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = iframeContent;
        console.log("###################tempDiv", tempDiv);

        // Capture the content using html2canvas
        html2canvas(tempDiv).then(function(canvas) {
          console.log("###################html2canvas onrendered");
          console.log(canvas);
          console.log(el);
          console.log(data);
          var dataUrl = canvas.toDataURL();
          //console.log(dataUrl);
          //el.src = dataUrl;
          let mesh = el.getObject3D("mesh");
          const texture = new THREE.CanvasTexture(canvas);
          texture.wrapS = THREE.ClampToEdgeWrapping;
          texture.wrapT = THREE.ClampToEdgeWrapping;
          texture.minFilter = THREE.LinearFilter;
          console.log(texture);
          data.iframetexture = texture;
          console.log(data);
          let textureToBeRemoved = mesh.material.map;
          mesh.material.map = texture;
          mesh.material.renderOrder = 1;
          mesh.material.needsUpdate = true;
          //el.setAttribute('src', 'url(' + dataUrl + ')');
          if (textureToBeRemoved) textureToBeRemoved.dispose();
        });
      }
    }

    // Listen for messages from the iframe
    window.addEventListener('message', handleIframeContent, false);

    iframe.addEventListener('load', function() {
      // Send a message to the iframe requesting its content
      console.log("###################iframe load");
      iframe.contentWindow.postMessage({ type: 'requestIframeContent' }, '*');
    });

    const title = document.createElement('a-text');
    title.setAttribute('value', data.text);
    title.setAttribute('position', `0 ${data.height * 0.5 + 0.25 + data.frameWidth} 0`);
    title.setAttribute('align', 'center');
    title.setAttribute('side', 'double');
    //title.setAttribute('link', `href: ${data.url}; on: click`);
    el.appendChild(title);
    data.titleEl = title;

    if (data.enableFrame == true) {
      const frameWidth = data.frameWidth;
      const width = data.width;
      const height = data.height;

      const box1 = document.createElement('a-box');
      box1.setAttribute('position', `${(width + frameWidth) / 2} 0 0`);
      box1.setAttribute('scale', `${frameWidth} ${height} ${frameWidth}`);
      el.appendChild(box1);

      const box2 = document.createElement('a-box');
      box2.setAttribute('position', `${-(width + frameWidth) / 2} 0 0`);
      box2.setAttribute('scale', `${frameWidth} ${height} ${frameWidth}`);
      el.appendChild(box2);

      const box3 = document.createElement('a-box');
      box3.setAttribute('position', `0 ${(height + frameWidth) / 2} 0`);
      box3.setAttribute('scale', `${width + frameWidth * 2} ${frameWidth} ${frameWidth}`);
      el.appendChild(box3);

      const box4 = document.createElement('a-box');
      box4.setAttribute('position', `0 0 ${-frameWidth / 4 - 0.01}`);
      box4.setAttribute('scale', `${width + frameWidth * 2} ${height + frameWidth * 2} ${frameWidth / 2}`);
      el.appendChild(box4);
    };

    el.addEventListener('click', function () {
      window.location.href = data.url;
    });
  },

  update: function () {
    const data = this.data;
    console.log("###################update data", data);
    let mesh = this.el.getObject3D("mesh");
    if (data.iframetexture) {
      mesh.material.map = data.iframetexture;
      mesh.material.renderOrder = 1;
      mesh.material.needsUpdate = true;
    };
    data.titleEl.setAttribute('value', data.text);
  },
});