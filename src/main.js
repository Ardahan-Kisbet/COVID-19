var Drag = /*@__PURE__*/ (function(PointerInteraction) {
  function Drag() {
    PointerInteraction.call(this, {
      handleDownEvent: handleDownEvent,
      handleDragEvent: handleDragEvent,
      handleMoveEvent: handleMoveEvent,
      handleUpEvent: handleUpEvent
    });

    /**
     * @type {import("../src/ol/coordinate.js").Coordinate}
     * @private
     */
    this.coordinate_ = null;

    /**
     * @type {string|undefined}
     * @private
     */
    this.cursor_ = "pointer";

    /**
     * @type {Feature}
     * @private
     */
    this.feature_ = null;

    /**
     * @type {string|undefined}
     * @private
     */
    this.previousCursor_ = undefined;
  }

  if (PointerInteraction) Drag.__proto__ = PointerInteraction;
  Drag.prototype = Object.create(
    PointerInteraction && PointerInteraction.prototype
  );
  Drag.prototype.constructor = Drag;

  return Drag;
})(PointerInteraction);
