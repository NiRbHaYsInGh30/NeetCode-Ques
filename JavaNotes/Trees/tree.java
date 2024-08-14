public class tree {
    // Definition of a Node in a binary tree
    static class Node {
        int data; // Value stored in the node
        Node left; // Pointer to the left child node
        Node right; // Pointer to the right child node

        Node(int data) {
            this.data = data; // Initialize node data
            this.left = null; // Initialize left child as null
            this.right = null; // Initialize right child as null
        }
    }

    // Definition of a BinaryTree class
    static class BinaryTree {
        static int idx = -1; // Static variable to keep track of the current index in Nodes[]

        // Recursive function to build a binary tree from an array representation
        public static Node buildTree(int Nodes[]) {
            idx++; // Increment index to traverse the Nodes[] array

            // If the current element in Nodes[] is -1, return null (indicating an empty
            // node)
            if (Nodes[idx] == -1) {
                return null;
            }

            // Create a new node with the value from Nodes[]
            Node newNode = new Node(Nodes[idx]);

            // Recursively build the left and right subtrees of the current node
            newNode.left = buildTree(Nodes); // Build left subtree
            newNode.right = buildTree(Nodes); // Build right subtree

            return newNode; // Return the current node with its left and right subtrees
        }

        public static void preorder(Node root) {
            if (root == null) {
                return;
            }
            System.out.print(root.data + " ");
            preorder(root.left);
            preorder(root.right);
        }
          public static void inorder(Node root) {
        if(root==null){
            return;
        }
        inorder(root.left);
        System.out.println(" ");
        System.out.print(root.data+" ");
        inorder(root.right);
    }
          public static void postorder(Node root) {
        if(root==null){
            return;
        }
        inorder(root.left);
        // System.out.println(" ");
        inorder(root.right);
        System.out.print(root.data+" ");
    }
    }

    public static void main(String[] args) {
        int nodes[] = { 1, 2, 4, -1, -1, 5, -1, -1, 3, -1, 6, -1, -1 };
        BinaryTree tree = new BinaryTree();
        Node root = tree.buildTree(nodes);
        // System.out.println(root.data);
        // tree.preorder(root);
        // tree.inorder(root);
        tree.postorder(root);

    }

}
