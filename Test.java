import java.util.ArrayList;

public class Test{
    public static void main(String[] args) {
        int arr[] = new int[5];
        for(int i=0; i<arr.length; i++){
            arr[i] = i+1;
        }

        for(int ele:arr){
            System.out.print(ele+" ");
        }

        ArrayList<String>al = new ArrayList<>();

    }
}