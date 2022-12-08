import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> names = new ArrayList<>();

        names.add("컬렉션 프레임워크 중List");
        names.add("List 중 ArrayList");
        for(String name : names)
        System.out.println(name);
    }
}