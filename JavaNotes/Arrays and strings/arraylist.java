import java.util.Scanner;
import java.util.ArrayList;

class Main {
public static void main(String[] args) {

    Scanner scn=new Scanner(System.in);
    ArrayList<Integer> dynamicArray=new ArrayList<>();
    int NumberOfElements=scn.nextInt();

    for(int i=0;i<NumberOfElements;i++){
        int element=scn.nextInt();
        dynamicArray.add(element);
        
    }

    for(int i=0;i<dynamicArray.size();i++){
       System.out.print(dynamicArray.get(i)+" ");

    }
    // Scanner.close();   
}
}