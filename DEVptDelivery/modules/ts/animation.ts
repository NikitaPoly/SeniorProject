import { Scene, WebGLRenderer, PerspectiveCamera, BoxGeometry, MeshBasicMaterial, Mesh } from "three";

interface sceneReturnValue {
    canvas: HTMLCanvasElement,
    scene: Scene,
    renderer: WebGLRenderer,
    camera: PerspectiveCamera,
    cube: Mesh
}
function setupScene() {
    const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    const scene = new Scene();
    const renderer: WebGLRenderer = new WebGLRenderer({ canvas });
    //camera settings
    const fov: number = 75;
    const aspect: number = 2;
    const near: number = .01;
    const far: number = 5;
    const camera: PerspectiveCamera = new PerspectiveCamera(fov, aspect, near, far)
    camera.position.z = 2;
    //box settings
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new BoxGeometry(boxWidth, boxHeight, boxDepth);
    //material for box
    const material = new MeshBasicMaterial({ color: 0x0E48C5 });
    //make the box
    const cube = new Mesh(geometry, material);
    //add box to scene
    scene.add(cube);
    const returnThis: sceneReturnValue = {
        canvas: canvas,
        scene: scene,
        renderer: renderer,
        camera: camera,
        cube: cube
    }
    return returnThis;
}
const _ = {
    setupScene
}
export default _;

