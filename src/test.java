import java.util.Scanner;

public class test {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        for(int i=1; i<=num; i++){
            if(i-1>num/2){
                int n=1;
                for(int j=1; j<=3; j++){
                    for(int k=num/2; k>=i; k--){
                        System.out.printf("       ");
                    }
                    for(int k=1; k<=3; k++){
                        System.out.printf("[%dx%d]",i,n);
                        n++;
                    }
                    System.out.println();
                }
                System.out.println();
            }
            else{
                int n=1;
                for(int j=1; j<=3; j++){
                    for(int k=num; k<=num/2+i; k++){
                        System.out.printf("       ");
                    }
                    for(int k=1; k<=3; k++){
                        System.out.printf("[%dx%d]",i,n);
                        n++;
                    }
                    System.out.println();
                }
                System.out.println();
            }
        }
    }
}
