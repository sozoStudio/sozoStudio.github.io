//this script handles all the 3d objs in the scene,
//including hotspots, teleport spots and DOM events
			var camera, scene, renderer, loader;

			// var isUserInteracting = false,
			// onMouseDownMouseX = 0, onMouseDownMouseY = 0,
			// lon = 0, onMouseDownLon = 0,
			// lat = 0, onMouseDownLat = 0,
			// phi = 0, theta = 0;

      var orbitControl, deviceOrientation, controls;
      function toggleControls(){
        if (deviceOrientation) {
          deviceOrientation = false;
        }else {
          deviceOrientation = true;
          controls.connect();
        }
        console.log("change controls: deviceOrientation = " + deviceOrientation);
      }

			var hotspotControl = true;
			function toggleHotspots(){
				if (hotspotControl) {
					hotspotControl = false;
				}else {
					hotspotControl = true;
				}
				console.log("hotspotControl = " + hotspotControl);
			}

			//vars for hotspots and hotspot controls
			var domEvents;

			//var for setting camera
			var count = 0;

			var hotspots = [];

			init();
			animate();

			function init() {
				//popup window
				// $(".popup").hide();

				var container, mesh;

				container = document.getElementById( 'container' );

				camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1100 );
				//camera.lookAt(new THREE.Vector3( -400, 100, 200 ));
				camera.target = new THREE.Vector3( -400, 100, 200 );
				//camera.rotate.z = 5*Math.PI/180;
				camera.rotation.x = -90 * Math.PI / 180;
				camera.rotation.y = 330 * Math.PI / 180;
				camera.rotation.z = -60 * Math.PI / 180;

				scene = new THREE.Scene();

				camera.rotation.set(0.06, 1.9, 8.4);
				scene.add(camera);

				//scene.add(camera);


        loader = new THREE.TextureLoader();

        loader.load(
          'img/1/texture.jpg',
          function( texture ){
            var geometry = new THREE.SphereGeometry( 500, 60, 40 );
    				geometry.scale( - 1, 1, 1 );

    				var material = new THREE.MeshBasicMaterial( {
    					map: texture
    				} );

    				mesh = new THREE.Mesh( geometry, material );
						mesh.name = "pan";
						mesh.rotation.y = -90 * Math.PI/180;
    				scene.add( mesh );
          }
        );



		//----------------------- hotspot stuff ----------------------------------------------------------------



		//------------- titles / writings on the roof structure ---------------------------------------
				//--------------------------------------------------------------------------
				var hemi = new THREE.DirectionalLight( 0xffffff, 1.5 );
				hemi.position.set( 1, 1, 1 );
        scene.add(hemi);


				//---------------------------------------------------------------------------
				var material = new THREE.MeshBasicMaterial( { color:0xFF3301, transparent: true, blending: THREE.AdditiveBlending } ) ;
				material.opacity = 0.7;

				//object = new THREE.Mesh( new  THREE.SphereGeometry(75, 20, 10), material); //change back to r=15
				var hotspot2 = new THREE.Mesh( new  THREE.SphereGeometry(15, 20, 10), material);
				hotspot2.position.set(-400, 140, 180);
				hotspot2.name = "hotspot2";

				hotspots.push(hotspot2);
				scene.add(hotspot2);






		//------------ End of titles -------------------------------------------------------------


		//------------ To other panos ------------------------------------------------------------
				// var door;
				// var geometry = new THREE.PlaneGeometry( 60, 100, 32 );
				// var material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
				// material.transparent = true; material.opacity = 0.5;
				// var door = new THREE.Mesh( geometry, material );
				//
				// door.position.set(90, 30, 400);
				// door.rotation.y = 15*Math.PI/180;
				// scene.add( door );
				//
				// //-----------------------------------------------------
				//
				// var door_right;
				// var geometry = new THREE.PlaneGeometry( 60, 100, 32 );
				// var material = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
				// material.transparent = true; material.opacity = 0.5;
				// var door_right = new THREE.Mesh( geometry, material );
				//
				// door_right.position.set(-120, 30, -400);
				// door_right.rotation.y = 15*Math.PI/180;
				// scene.add( door_right );

				//------------------------------------------------------

				var material = new THREE.MeshBasicMaterial( { color: 0xffaa00, transparent: true, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, alphaMap: THREE.ImageUtils.loadTexture("img/maps/right.png") } ) ;
				material.opacity = 0.5;
				//object = new THREE.Mesh( new  THREE.SphereGeometry(75, 20, 10), material); //change back to r=15
				var tele_left = new THREE.Mesh( new  THREE.PlaneGeometry( 100, 100, 32 ), material);
				tele_left.rotation.x = -90 * Math.PI/180;
				//tele_left.rotation.z = 80 * Math.PI/180;

				//tele_left.position.set(50, -150, 350);
				//tele_left.position.set(-380, -130, 80);
				//tele_left.position.set(70, -150, 400);
				tele_left.position.set(-50, -130, -200);


				scene.add(tele_left);







		//--------------- End of teleporting spots -----------------------------------------------

				renderer = new THREE.WebGLRenderer();
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( renderer.domElement );

        //controls

        deviceOrientation = false;


        orbitControl = new THREE.OrbitControls(camera, renderer.domElement);

        orbitControl.target.set(
          camera.position.x + 0.1,
          camera.position.y,
          camera.position.z
        );

        controls = new THREE.DeviceOrientationControls( camera );

//----------------------------------------------------------------------------------------
				//dom events
			domEvents = new THREEx.DomEvents(camera, renderer.domElement);




				domEvents.addEventListener(hotspot2, 'click', function(event){
						$('#modal4').modal('toggle');
					}, false);

					domEvents.addEventListener(hotspot2, 'mouseover', function(event){
						hotspot2.material.opacity = 1;
					});

					domEvents.addEventListener(hotspot2, 'mouseout', function(event){
						hotspot2.material.opacity = 0.7;
					});



			domEvents.addEventListener(tele_left, 'click', function(event){
						//console.log('click on the door!!', object);
						//tele_left.material.color = 0x4091FF;
						window.open('pan_scene7.html','_self');
				}
			);

			domEvents.addEventListener(tele_left, 'mouseover', function(event){
				tele_left.material.opacity = 0.8;
			});

			domEvents.addEventListener(tele_left, 'mouseout', function(event){
				tele_left.material.opacity = 0.5;
			});




//----------------------------------------------------------------------------------------


				window.addEventListener( 'resize', onWindowResize, false );

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}



			function animate() {

				requestAnimationFrame( animate );

        if(deviceOrientation){
          controls.update();
        }else {
          orbitControl.update();
        }

				update();

			}

			function update() {

				if (hotspotControl) {
					for (var i = 0; i < hotspots.length; i++) {
						hotspots[i].visible = true;
					}
					//object.visible = true;

				}else {
					for (var i = 0; i < hotspots.length; i++) {
						hotspots[i].visible = false;
					}
				}


				renderer.render( scene, camera );

			}
