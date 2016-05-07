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

			//avatar status
			var lsc_visible = false;

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
				//declare all materials
				var material1= new THREE.MeshBasicMaterial( { color:0xf0dfad, transparent: true, blending: THREE.AdditiveBlending, side: THREE.DoubleSide } ) ;
				var material2= new THREE.MeshBasicMaterial( { color:0xf0dfad, transparent: true, blending: THREE.AdditiveBlending, side: THREE.DoubleSide } ) ;
				var material3= new THREE.MeshBasicMaterial( { color:0xf0dfad, transparent: true, blending: THREE.AdditiveBlending, side: THREE.DoubleSide } ) ;
				var material4= new THREE.MeshBasicMaterial( { color:0xf0dfad, transparent: true, blending: THREE.AdditiveBlending, side: THREE.DoubleSide } ) ;

				var loader_int = new THREE.TextureLoader();
				loader_int.load(
					'img/maps/icon_temple.jpg',
					function(texture){
						material1.alphaMap = texture;
						material2.alphaMap = texture;
						material3.alphaMap = texture;
						material4.alphaMap = texture;
					}
				);




				//-------------------------

				material1.opacity = 0.7;

				//object = new THREE.Mesh( new  THREE.SphereGeometry(75, 20, 10), material); //change back to r=15
				var hotspot1 = new THREE.Mesh( new  THREE.PlaneGeometry( 30, 30, 32 ), material1);
				hotspot1.position.set(-400, 100, -100);
				hotspot1.name = "hotspot1";
				hotspot1.rotation.y = 70 * Math.PI/180;

				hotspots.push(hotspot1);
				scene.add(hotspot1);

				//-------------------------

				material2.opacity = 0.7;

				var hotspot2 = new THREE.Mesh( new  THREE.PlaneGeometry( 30, 30, 32 ), material2);
				hotspot2.position.set(-380, -100, 180);
				hotspot2.name = "hotspot2";
				hotspot2.rotation.y = -60 * Math.PI/180;

				hotspots.push(hotspot2);
				scene.add(hotspot2);

				//-------------------------
				material3.opacity = 0.7;

				//object = new THREE.Mesh( new  THREE.SphereGeometry(75, 20, 10), material); //change back to r=15
				var hotspot3 = new THREE.Mesh( new  THREE.PlaneGeometry( 30, 30, 32 ), material3);
				hotspot3.position.set(-400, -70, -100);
				hotspot3.name = "hotspot3";
				hotspot3.rotation.y = 70 * Math.PI/180;

				hotspots.push(hotspot3);
				scene.add(hotspot3);

				//-------------------------

				//var material = new THREE.MeshBasicMaterial( { color:0x02ffb5, transparent: true, blending: THREE.AdditiveBlending, side: THREE.DoubleSide } ) ;
				material4.opacity = 0.7;

				//object = new THREE.Mesh( new  THREE.SphereGeometry(75, 20, 10), material); //change back to r=15
				var hotspot4 = new THREE.Mesh( new  THREE.PlaneGeometry( 15, 15, 32 ), material4);
				hotspot4.position.set(-120, 80, 200);
				hotspot4.name = "hotspot4";
				hotspot4.rotation.y = -10 * Math.PI/180;

				hotspots.push(hotspot4);
				scene.add(hotspot4);
				//-------------------------

				var material5 = new THREE.MeshBasicMaterial( { color:0xffba00, transparent: true, blending: THREE.AdditiveBlending, side: THREE.DoubleSide } ) ;
				material5.opacity = 0.7;

				var loader = new THREE.TextureLoader();
				loader.load(
					'img/maps/icon_book.jpg',
					function(texture){
						material5.alphaMap = texture;
					}
				);

				//object = new THREE.Mesh( new  THREE.SphereGeometry(75, 20, 10), material); //change back to r=15
				var hotspot5 = new THREE.Mesh( new  THREE.PlaneGeometry( 25, 25, 32 ), material5);
				hotspot5.position.set(-250, -80, -100);
				hotspot5.name = "hotspot5";
				hotspot5.rotation.y = 60 * Math.PI/180;

				hotspots.push(hotspot5);
				scene.add(hotspot5);






		//------------ End of hotspots -------------------------------------------------------------

		//------------------------- Avatar -------------------------------------------------------

		var loader = new THREE.TextureLoader();
		var material0 = new THREE.MeshBasicMaterial({transparent: true, side: THREE.DoubleSide});

		//load alpha map
		loader.load(
			//resource url
			'img/maps/s3_lsc1_alpha2.jpg',
			//Function when resource is loaded
			function(texture){
				material0.alphaMap = texture;
			}
		);

		//load texture
		loader.load(
			//resource url
			'img/maps/s3_lsc1.jpg',
			//Function when resource is loaded
			function(texture){
				material0.map = texture;
			}
		);

		var figure_plane = new THREE.Mesh( new  THREE.PlaneGeometry( 100, 100, 32 ), material0);
		figure_plane.position.set(-125, -10, -100);
		figure_plane.rotation.y = 60 * Math.PI/180;
		figure_plane.visible = false;
		scene.add(figure_plane);


		//----------------------------------------------------------------------------------------


		//------------ To other panos ------------------------------------------------------------


				//------------------------------------------------------

				var material_t = new THREE.MeshBasicMaterial( { color: 0xffaa00, transparent: true, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, alphaMap: THREE.ImageUtils.loadTexture("img/maps/right.png") } ) ;
				material_t.opacity = 0.5;
				//object = new THREE.Mesh( new  THREE.SphereGeometry(75, 20, 10), material); //change back to r=15
				var tele_left = new THREE.Mesh( new  THREE.PlaneGeometry( 100, 100, 32 ), material_t);
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

			domEvents.addEventListener(hotspot1, 'click', function(event){
						$('#modal1').modal('toggle');
			}, false);

			domEvents.addEventListener(hotspot1, 'mouseover', function(event){
						hotspot1.material.opacity = 1;
			});

			domEvents.addEventListener(hotspot1, 'mouseout', function(event){
						hotspot1.material.opacity = 0.7;
			});

			domEvents.addEventListener(hotspot2, 'click', function(event){
						$('#modal4').modal('toggle');
						console.log("modal 4 toggle function called");
			}, false);

			domEvents.addEventListener(hotspot2, 'mouseover', function(event){
						hotspot2.material.opacity = 1;
			});

			domEvents.addEventListener(hotspot2, 'mouseout', function(event){
						hotspot2.material.opacity = 0.7;
			});

			domEvents.addEventListener(hotspot3, 'click', function(event){
						$('#modal3').modal('toggle');
			}, false);

			domEvents.addEventListener(hotspot3, 'mouseover', function(event){
						hotspot3.material.opacity = 1;
			});

			domEvents.addEventListener(hotspot3, 'mouseout', function(event){
						hotspot3.material.opacity = 0.7;
			});

			domEvents.addEventListener(hotspot4, 'click', function(event){
						$('#modal2').modal('toggle');
			}, false);

			domEvents.addEventListener(hotspot4, 'mouseover', function(event){
						hotspot4.material.opacity = 1;
			});

			domEvents.addEventListener(hotspot4, 'mouseout', function(event){
						hotspot4.material.opacity = 0.7;
			});

			domEvents.addEventListener(hotspot5, 'click', function(event){
				var bgm_lsc = document.getElementById("lsc_bgm");
				var lsc_nar = document.getElementById("lsc_nar");

						if (!lsc_visible) {
							figure_plane.visible = true;
							//figure_plane.material.opacity = 1 + Math.sin(new Date().getTime() * .0025);
							lsc_visible = true;
							bgm_lsc.load();bgm_lsc.play();
							lsc_nar.load(); lsc_nar.play();
						}else {
							figure_plane.visible = false;
							lsc_visible = false;
							bgm_lsc.pause();
							lsc_nar.pause();
						}
			}, false);

			domEvents.addEventListener(hotspot5, 'mouseover', function(event){
						hotspot5.material.opacity = 1;
			});

			domEvents.addEventListener(hotspot5, 'mouseout', function(event){
						hotspot5.material.opacity = 0.7;
			});

			domEvents.addEventListener(figure_plane, 'click', function(event){
				var bgm_lsc = document.getElementById("lsc_bgm");
				var lsc_nar = document.getElementById("lsc_nar");
				if (lsc_visible) {
							figure_plane.visible = false;
							lsc_visible = false;

							bgm_lsc.pause();
							lsc_nar.pause();

						}
			}, false);






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
