
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
          'img/5/texture.jpg',
          function( texture ){
            var geometry = new THREE.SphereGeometry( 500, 60, 40 );
    				geometry.scale( - 1, 1, 1 );

    				var material = new THREE.MeshBasicMaterial( {
    					map: texture
    				} );

    				mesh = new THREE.Mesh( geometry, material );
						mesh.name = "pan";
						mesh.rotation.y = -180 * Math.PI/180;
    				scene.add( mesh );
          }
        );



		//----------------------- hotspot stuff ----------------------------------------------------------------



		//------------- titles / writings on the roof structure ---------------------------------------
				//--------------------------------------------------------------------------
				var hemi = new THREE.DirectionalLight( 0xffffff, 1.5 );
				hemi.position.set( 1, 1, 1 );
        scene.add(hemi);

				//--------------------------------------------------------------------------
				//------------------ declare materials -------------------------------------
				var material_1 = new THREE.MeshBasicMaterial( { transparent: true, side: THREE.DoubleSide, blending: THREE.AdditiveBlending } ) ;
				var material_2 = new THREE.MeshBasicMaterial( { transparent: true, blending: THREE.AdditiveBlending, side: THREE.DoubleSide } ) ;
				var material_3 = new THREE.MeshBasicMaterial( { transparent: true, blending: THREE.AdditiveBlending, side: THREE.DoubleSide } ) ;
				var material_4 = new THREE.MeshBasicMaterial( { transparent: true, blending: THREE.AdditiveBlending, side: THREE.DoubleSide } ) ;

				var loader_m = new THREE.TextureLoader();
				loader_m.load(
					'img/maps/icon_statue_5.jpg',
					function(texture){
						material_1.map = texture;
						material_2.map = texture;
						material_3.map = texture;
						material_4.map = texture;
					}
				);

				var loader_a = new THREE.TextureLoader();
				loader_a.load(
					'img/maps/icon_statue4_alpha2.png',
					function(texture){
						material_1.alphaMap = texture;
						material_2.alphaMap = texture;
						material_3.alphaMap = texture;
						material_4.alphaMap = texture;
					}
				);

				//--------------------------------------------------------------------------
				//var material = new THREE.MeshBasicMaterial( { color:0xFF3301, transparent: true, blending: THREE.AdditiveBlending } ) ;
				material_1.opacity = 0.7;

				//object = new THREE.Mesh( new  THREE.SphereGeometry(75, 20, 10), material); //change back to r=15
				//object = new THREE.Mesh( new  THREE.SphereGeometry(13, 20, 10), material_1);
				object = new THREE.Mesh( new THREE.PlaneGeometry( 28, 28, 32 ), material_1);
				object.rotation.y = 20 * Math.PI/180;

				object.position.set(170, 180, 258);
				object.name = "testOBJ001";


				hotspots.push(object);
				scene.add(object);

				//-------------------------------------------------------
				//var material = new THREE.MeshBasicMaterial( { color:0xFF3301, transparent: true, blending: THREE.AdditiveBlending } ) ;
				var material_2 = new THREE.MeshBasicMaterial( { transparent: true,
					side: THREE.DoubleSide,
					map: THREE.ImageUtils.loadTexture("img/maps/icon_scroll_1.jpg"),
					alphaMap: THREE.ImageUtils.loadTexture("img/maps/icon_scroll1_alpha.png"),
					blending: THREE.AdditiveBlending
				 } ) ;

				material_2.opacity = 0.7;

				//object = new THREE.Mesh( new  THREE.SphereGeometry(75, 20, 10), material); //change back to r=15
				//var hotspot2 = new THREE.Mesh( new  THREE.SphereGeometry(15, 20, 10), material_2);
				var hotspot2 = new THREE.Mesh( new THREE.PlaneGeometry( 30, 30, 32 ), material_2);
				hotspot2.rotation.y = 250 * Math.PI/180;

				hotspot2.position.set(300, 200, 200);
				hotspot2.name = "hotspot2";

				// if (!hotspotControl) {
				// 	hotspot2.visible = false;
				// }
				hotspots.push(hotspot2);
				scene.add(hotspot2);


				//-------------------------------------------------------
				//var material = new THREE.MeshBasicMaterial( { color:0xFF3301, transparent: true, blending: THREE.AdditiveBlending } ) ;
				var material_3 = new THREE.MeshBasicMaterial( { transparent: true,
					side: THREE.DoubleSide,
					map: THREE.ImageUtils.loadTexture("img/maps/icon_scroll_1.jpg"),
					alphaMap: THREE.ImageUtils.loadTexture("img/maps/icon_scroll1_alpha.png"),
					blending: THREE.AdditiveBlending
				 } ) ;
				material_3.opacity = 0.7;

				//object = new THREE.Mesh( new  THREE.SphereGeometry(75, 20, 10), material); //change back to r=15
				//var hotspot3 = new THREE.Mesh( new  THREE.SphereGeometry(15, 20, 10), material_3);
				var hotspot3 = new THREE.Mesh( new THREE.PlaneGeometry( 30, 30, 32 ), material_3);
				hotspot3.rotation.y = 250 * Math.PI/180;

				hotspot3.position.set(350, 120, 138);
				hotspot3.name = "hotspot3";

				// if (!hotspotControl) {
				// 	hotspot2.visible = false;
				// }
				hotspots.push(hotspot3);
				scene.add(hotspot3);


				//--------------------------------------------------

				//var material = new THREE.MeshBasicMaterial( { color:0xFF3301, transparent: true, blending: THREE.AdditiveBlending } ) ;
				var material_4 = new THREE.MeshBasicMaterial( { transparent: true,
					side: THREE.DoubleSide,
					map: THREE.ImageUtils.loadTexture("img/maps/icon_scroll_1.jpg"),
					alphaMap: THREE.ImageUtils.loadTexture("img/maps/icon_scroll1_alpha.png"),
					blending: THREE.AdditiveBlending
				 } ) ;
				material_4.opacity = 0.7;

				//object = new THREE.Mesh( new  THREE.SphereGeometry(75, 20, 10), material); //change back to r=15
				//var hotspot4 = new THREE.Mesh( new  THREE.SphereGeometry(15, 20, 10), material_4);
				var hotspot4 = new THREE.Mesh( new THREE.PlaneGeometry( 30, 30, 32 ), material_4);

				hotspot4.rotation.y = 250 * Math.PI/180;

				hotspot4.position.set(350, 150, 18);
				hotspot4.name = "hotspot4";

				// if (!hotspotControl) {
				// 	hotspot2.visible = false;
				// }
				hotspots.push(hotspot4);
				scene.add(hotspot4);


				//--------------------------------------------------

				var geometry = new THREE.PlaneGeometry( 100, 8, 32 );
				var material = new THREE.MeshBasicMaterial( {color: 0x34FFCA, side: THREE.DoubleSide, blending: THREE.AdditiveBlending} );
				material.transparent = true; material.opacity = 0.3;
				var title_2 = new THREE.Mesh( geometry, material );

				title_2.position.set(-30, 120, 88);
				title_2.rotation.y = -5*Math.PI/180;
				title_2.rotation.z = -111*Math.PI/180;
				title_2.rotation.x = 85*Math.PI/180;

				hotspots.push(title_2);
				scene.add(title_2);

				//---------------------------------------------------
				var title_1;
				var geometry = new THREE.PlaneGeometry( 100, 8, 32 );
				var material = new THREE.MeshBasicMaterial( {color: 0x34FFCA, side: THREE.DoubleSide, blending: THREE.AdditiveBlending} );
				material.transparent = true; material.opacity = 0.3;
				title_1 = new THREE.Mesh( geometry, material );

				title_1.position.set(73, 120, 43);
				title_1.rotation.y = -10*Math.PI/180;
				title_1.rotation.z = -114*Math.PI/180;
				title_1.rotation.x = 85*Math.PI/180;
				hotspots.push(title_1);
				scene.add( title_1 );

		//------------ End of titles -------------------------------------------------------------


		//------------ To other panos ------------------------------------------------------------

		//load textures!!!
		var material_t1 = new THREE.MeshBasicMaterial( { color: 0xffaa00, transparent: true, side: THREE.DoubleSide, blending: THREE.AdditiveBlending} ) ;
		var loader_t = new THREE.TextureLoader();
		loader_t.load(
			'img/maps/icon_next.png',
			function(texture){
				material_t1.map = texture;
			}
		);
		var loader_alpha = new THREE.TextureLoader();
		loader_alpha.load(
			'img/maps/icon_next_alpha.jpg',
			function(texture){
				material_t1.alphaMap = texture;
			}
		);
				//------------------------------------------------------



				//var material = new THREE.MeshBasicMaterial( { color: 0xffaa00, transparent: true, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, alphaMap: THREE.ImageUtils.loadTexture("img/maps/right.png")} ) ;
				material_t1.opacity = 0.5;
				var tele_right = new THREE.Mesh( new  THREE.PlaneGeometry( 80, 80, 12 ), material_t1);

				//var tele_right = new THREE.Mesh( new  THREE.SphereGeometry(10, 20, 10), material);
				//tele_right.rotation.y = 90 * Math.PI/180;
				tele_right.rotation.x = 90 * Math.PI/180;
				tele_right.rotation.z = 160 * Math.PI/180;
				tele_right.position.set(-200, -120, 50);



				scene.add(tele_right);





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



			domEvents.addEventListener(object, 'click', function(event){
					$('#modal3').modal('toggle');
				}, false);

				domEvents.addEventListener(object, 'mouseover', function(event){
					object.material.opacity = 1;
				});

				domEvents.addEventListener(object, 'mouseout', function(event){
					object.material.opacity = 0.7;
				});

				domEvents.addEventListener(hotspot2, 'click', function(event){
						$('#modal4').modal('toggle');
					}, false);

				domEvents.addEventListener(hotspot2, 'mouseover', function(event){
						hotspot2.material.opacity = 1;
				});

				domEvents.addEventListener(hotspot2, 'mouseout', function(event){
						hotspot2.material.opacity = 0.7;
				});

				domEvents.addEventListener(hotspot3, 'click', function(event){
						$('#modal5').modal('toggle');
					}, false);

				domEvents.addEventListener(hotspot3, 'mouseover', function(event){
						hotspot3.material.opacity = 1;
				});

				domEvents.addEventListener(hotspot3, 'mouseout', function(event){
						hotspot3.material.opacity = 0.7;
				});

				domEvents.addEventListener(hotspot4, 'click', function(event){
						$('#modal6').modal('toggle');
					}, false);

				domEvents.addEventListener(hotspot4, 'mouseover', function(event){
						hotspot4.material.opacity = 1;
				});

				domEvents.addEventListener(hotspot4, 'mouseout', function(event){
						hotspot4.material.opacity = 0.7;
				});




			domEvents.addEventListener(title_1, 'click', function(event){
					$('#modal1').modal('toggle');
				}, false);

			domEvents.addEventListener(title_1, 'mouseover', function(event){
				title_1.material.opacity = 0.5;
			});

			domEvents.addEventListener(title_1, 'mouseout', function(event){
				title_1.material.opacity = 0.3;
			});

			domEvents.addEventListener(title_2, 'click', function(event){
					$('#modal2').modal('toggle');
				}, false);

			domEvents.addEventListener(title_2, 'mouseover', function(event){
				title_2.material.opacity = 0.5;
			});

			domEvents.addEventListener(title_2, 'mouseout', function(event){
				title_2.material.opacity = 0.3;
			});

			// domEvents.addEventListener(tele_left, 'click', function(event){
			// 			//console.log('click on the door!!', object);
			// 			//tele_left.material.color = 0x4091FF;
			// 			window.open('panorama_5.html','_self');
			// 	}
			// );
			//
			// domEvents.addEventListener(tele_left, 'mouseover', function(event){
			// 	tele_left.material.opacity = 0.8;
			// });
			//
			// domEvents.addEventListener(tele_left, 'mouseout', function(event){
			// 	tele_left.material.opacity = 0.5;
			// });


			domEvents.addEventListener(tele_right, 'click', function(event){
						//console.log('click on the door!!', object);
						//tele_left.material.color = 0x4091FF;
						//window.open('pan_scene1.html','_self');
                //window.location="pan_scene1.html";
								setTimeout(function(){chrome.app.window.current().close();}, 300);
								chrome.app.window.create('pan_scene1.html',
						        {
						            type:       "panel",
												bounds: { width: 1280, height: 720},
										    minWidth:800, minHeight: 450,
						            focused: true
						        });
				}
			);

			domEvents.addEventListener(tele_right, 'mouseover', function(event){
				tele_right.material.opacity = 0.8;
			});

			domEvents.addEventListener(tele_right, 'mouseout', function(event){
				tele_right.material.opacity = 0.5;
			});

//----------------------------------------------------------------------------------------


				window.addEventListener( 'resize', onWindowResize, false );
				// document.addEventListener('mousemove', onDocumentMouseDown, false);
				//document.addEventListener('touchstart', onDocumentTouchStart, false);

				//console.log("end of init camera is " + camera.position);


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

					//console.log(camera.rotation);
					//console.log(camera.target);

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
				// if (count == 0) {
				//
				// 	camera.rotation.x = -90 * Math.PI / 180;
				// 	camera.rotation.y = 330 * Math.PI / 180;
				// 	camera.rotation.z = -60 * Math.PI / 180;
				// 	console.log("count = 0, " + camera.rotation);
				// 	count++;
				// }

				renderer.render( scene, camera );

			}
