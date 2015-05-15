//<html>
//<script>
window.onload = function(){
	//Self referential to a tree
	var testTree = {
		'a':'',
		'b':'',
		'g':{
			'under':'f'
		},
		'c':{
			'under':'d'
		},
		'd':'',
		'e':{
			'under':'b'
		},
		'f':{
			'under':'c'
		},
		'h':{
			'under':'b'
		},
		'i':{
			'under':'b'
		},
		'j':'',
		'k':'',
	};
	var tree = function(){
		var rootList = {};
		var nodeList = {};
		this.page = '';
		this.roots = rootList;
		var node = function(parent,child,id){
			this.parent = parent;
			this.id = id;
			this.child = child;
		};
		var getNode = function(id){
			if (id in nodeList){
				return nodeList[id];
			}
			else{
				var Node = new node(null,null,id);
				nodeList[id] = Node;
				rootList[id] = Node;
				return Node;
			}
		};
		this.addLink = function(startId,endId){
			if (endId){
				var startNode = getNode(startId);
				var endNode = getNode(endId);
				endNode.parent = startNode;
				if (startNode.child){
					startNode.child.push(endNode);
				}
				else{
					startNode.child = [endNode];
				}
				delete rootList[endNode.id]; 
			}
			else{
				getNode(startId);
			}
		};
		var sectionLevel = function(indent){
			var string = '';
			for (var i=0;i<indent;i++){
				string = string + '=';
			}
			return string;
		};
		this.traverse = function(rootList,level,callback){
			if(!rootList){
				return;
			}
			level++;
			var wikiSection = sectionLevel(level);
			for (elem in rootList){
				var root = rootList[elem];
				var line = wikiSection + root.id + wikiSection + '\n';
				this.page = this.page + line;
				root = root.child;
				this.traverse(root,level);
			}
		};
	};
	
	var wikiTree = new tree();
	var convertIntoTree = function(dict){
		for (elem in dict){
			if (typeof(dict[elem]) == 'object'){
				wikiTree.addLink(dict[elem]['under'],elem);
			}
			else{
				wikiTree.addLink(elem);
			}
		}
	};
	convertIntoTree(testTree);
	var roots = wikiTree.roots;
	var page = '';
	for (elem in roots){
		console.log('---------');
		wikiTree.traverse([roots[elem]],1/*,findNodeValue*/);
	}
	console.log(wikiTree.page);
};
//</script>
//</html>