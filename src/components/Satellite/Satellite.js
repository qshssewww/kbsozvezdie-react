import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from "three/addons/controls/OrbitControls";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
const Satellite = () => {
  const mouse = new THREE.Vector2();
  const windowHalf = new THREE.Vector2( window.innerWidth / 2, window.innerHeight / 2 );
  const [target] = useState(new THREE.Vector3(-0.5, 0.1, 0));
  const [model, setModel] = useState()

  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)
  useEffect(()=>{
    if (window.innerWidth > 700){
      setWidth(window.innerWidth);
    }else {
      setWidth(600);
    }
    if (window.innerHeight > 500){
      setHeight(window.innerHeight);
    }else {
      setHeight(400);
    }
  }, [width, height])
  function init(){
    const loader = new GLTFLoader();
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 70, window.innerWidth/window.innerHeight, 0.1, 1000 );
    camera.position.set(13, 8 ,15); // Set position like this
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding;


    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.panSpeed = 0;
    controls.autoRotate = true;

    controls.keys = {
      LEFT: 'ArrowLeft', //left arrow
      UP: 'ArrowUp', // up arrow
      RIGHT: 'ArrowRight', // right arrow
      BOTTOM: 'ArrowDown' // down arrow
    }

    const light = new THREE.PointLight(0xc4c4c4,14);
    light.position.set(900,50,500);
    scene.add(light);

    const light2 = new THREE.PointLight(0xc4c4c4,6);
    light2.position.set(1500,100,-500);
    scene.add(light2);

    const light3 = new THREE.PointLight(0xCC5500,6);
    light3.position.set(0, 100, 0)
    scene.add(light3)

    const light5 = new THREE.PointLight(0xc4c4c4,4); // orange
    light5.position.set(-700, 200, 100)
    scene.add(light5)

    renderer.setSize( width/1.5, height/1.5 );
    const container = document.getElementById( 'sal' );
    container.appendChild( renderer.domElement );
    document.addEventListener( 'mousemove', onMouseMove, false );
    window.addEventListener( 'resize', onResize, false );


    loader.load( 'satellite/scene.gltf', function ( gltf ) {
      scene.add( gltf.scene );
      setModel(gltf)
    }, undefined, function ( error ) {

      console.error( error );

    } );

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame( animate );
      target.x = ( 1 - mouse.x ) * 0.002;
      target.y = ( 1 - mouse.y ) * 0.002;
      controls.enablePan = false;
      controls.maxDistance = 20;
      controls.minDistance = 7;
      camera.rotation.x += 0.05 * ( target.y - camera.rotation.x );
      camera.rotation.y += 0.05 * ( target.x - camera.rotation.y );
      camera.rotation.z += 0.05 * ( target.z - camera.rotation.z );
      controls.update();
      renderer.render( scene, camera );
    };

    function onMouseMove( event ) {

      mouse.x = ( event.clientX - windowHalf.x );
      mouse.y = ( event.clientY - windowHalf.x );

    }

    function onResize(  ) {

      const width = window.innerWidth;
      const height = window.innerHeight;

      windowHalf.set( width / 2, height / 2 );

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize( width, height );

    }

    animate();
  }

  useEffect(() => {
      init()
  }, [])
};

export default Satellite;
