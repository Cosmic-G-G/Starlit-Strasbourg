import {
	EventDispatcher,
	MOUSE,
	Quaternion,
	Spherical,
	TOUCH,
	Vector2,
	Vector3,
	Plane,
	Ray,
	MathUtils
} from 'three';

class DragControls extends EventDispatcher {

    constructor( object, domElement) {
        super();

		this.onPointerDown = (event) => {
			switch (event.button) {
				case MOUSE.LEFT: 
					mousePos.x = event.clientX;
					mousePos.y = event.clientY;

					this.domElement.addEventListener('pointermove', scope.onPointerMove);
					this.domElement.addEventListener('pointerup', scope.onPointerUp);
				break;
			}
		}

		this.onPointerMove = function (event) {
			let dx = event.clientX - mousePos.x;
			mousePos.x = event.clientX;
			let dy = event.clientY - mousePos.y;
			mousePos.y = event.clientY;

			let azimuth = dx * scope.object.fov * scope.object.aspect / window.innerWidth;
			let polar = dy * scope.object.fov / window.innerHeight;

			scope.object.rotation.order = "YXZ";
			scope.object.rotation.y += azimuth * Math.PI / 180;
			scope.object.rotation.x += polar * Math.PI / 180;
			scope.object.rotation.x = MathUtils.clamp(scope.object.rotation.x, -Math.PI/2, Math.PI/2)
			console.log(scope.object.rotation.x)
		}

		this.onPointerUp = function (event) {
			scope.domElement.removeEventListener('pointermove', scope.onPointerMove);
		}

		this.object = object;
		this.domElement = domElement;

		const scope = this;
		let mousePos = new Vector2();

		this.domElement.addEventListener('pointerdown', this.onPointerDown);
	}
}

export { DragControls };