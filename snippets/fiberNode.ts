function FiberNode(
  tag: WorkTag,
  pendingProps: mixed,
  key: null | string,
  mode: TypeOfMode,
) {
  this.tag = tag;            // identifying the type of fiber
  this.key = key;            // unique identifier of this child
  this.type = null;          // the resolved function/class associated with this fiber
  this.stateNode = null;     // the real DOM node for current Fiber
  // Used to connect other Fiber nodes to form a Fiber tree
  this.return = null;
  this.child = null;
  this.sibling = null;
  this.index = 0;

  this.ref = null;
  this.pendingProps = pendingProps; 
  this.memoizedProps = null;    // memoizedProps is used to create the output
  this.updateQueue = null;      // is a queue of state updates and callbacks
  this.memoizedState = null;    // is used to create the output

  this.effectTag = NoEffect; // NoEffect | Update | Placement | Delete 
  this.alternate = null; // Points to the fiber corresponding to this fiber during another update 


  // 指向下一个有副作用的 fiber
  this.nextEffect = null;
  this.firstEffect = null;
  this.lastEffect = null;


  this.lanes = NoLanes;
  this.childLanes = NoLanes;
}