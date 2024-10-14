### Event Propagation

it refers to the order in which events are handled when they are triggered on the web page.

two phases.

1. Event Capturing
   the event starts from the root(or parent) element and propagate down to target(or child) element.
2. Event Bubbling
   the event starts from the target(or child) element and propagate(move) back up to the root (or parent) element.

   generally browser checks if the elements that are actually clicked has an onclick event handler and runs it so.
   then it keeps moving outside until it reaches the outer most ancestor which is the <html>element.
