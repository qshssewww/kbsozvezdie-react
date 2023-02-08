import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from "three/addons/controls/OrbitControls";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
const Satellite = () => {
  const mouse = new THREE.Vector2();
  const windowHalf = new THREE.Vector2( window.innerWidth / 2, window.innerHeight / 2 );
  const [target] = useState(new THREE.Vector3(-0.5, 0.1, 0));
  const [model, setModel] = useState()
  const [initialCameraPosition] = useState(
    new THREE.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI)),
  );
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)
  const easeOutCirc = (x) => {
    return Math.sqrt(1 - Math.pow(x - 1, 2));
  };
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
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    //camera.position.set(200,200,0); // Set position like this
    camera.position.set(10, 10 ,10); // Set position like this
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding;


    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientLight);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = true;
    controls.panSpeed = 0;
    controls.autoRotate = true;

    controls.keys = {
      LEFT: 'ArrowLeft', //left arrow
      UP: 'ArrowUp', // up arrow
      RIGHT: 'ArrowRight', // right arrow
      BOTTOM: 'ArrowDown' // down arrow
    }
    // let wheel;
    // document.addEventListener("mousedown", function(event){
    //     wheel = false;
    //     return false;
    // });

    ///////
    const light = new THREE.PointLight(0xffffff,20);
    light.position.set(800, 1400 ,100);
    scene.add(light);

    //////
    // const light = new THREE.PointLight(0xc4c4c4,10);
    // light.position.set(900,50,500);
    // scene.add(light);
    // const light3 = new THREE.PointLight(0xc4c4c4,10);
    // light3.position.set(1500,100,-500);
    // scene.add(light3);

    renderer.setSize( width/1.5, height/1.5 );
    const container = document.getElementById( 'foxy' );
    container.appendChild( renderer.domElement );
    document.addEventListener( 'mousemove', onMouseMove, false );
    // document.addEventListener( 'wheel', onMouseWheel, false );
    window.addEventListener( 'resize', onResize, false );

    // const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    // const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    // const cube = new THREE.Mesh( geometry, material );
    // scene.add( cube );
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
      controls.maxDistance = 500;
      controls.minDistance = -110;
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

    // function onMouseWheel( event ) {


    // }

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
