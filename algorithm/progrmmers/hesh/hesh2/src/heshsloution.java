import java.util.Arrays;
import java.util.HashMap;


public class heshsloution {
    public boolean solution1(String[] phone_book) {
        Arrays.sort(phone_book);

        boolean answer = true;
        for (int i=0; i<phone_book.length-1; i++) {
            if (phone_book[i+1].contains(phone_book[i])) {
                answer = false;
                break;
            }
        }
        return answer;
    }


    public boolean solution2(String[] phone_book) {
        boolean answer = true;
        for(int i=0; i<phone_book.length-1; i++) {
            for(int j=i+1; j<phone_book.length; j++) {
                if(phone_book[i].startsWith(phone_book[j])) {return false;}
                if(phone_book[j].startsWith(phone_book[i])) {return false;}
            }
        }
        return answer;
    }


    public boolean solution3(String[] phone_book) {
        boolean answer = true;
        for(int i = 0 ; i < phone_book.length ; i++ )
        {
            for(int j = i+1 ; j < phone_book.length  ; j++){

                if(phone_book[i].length() <= phone_book[j].length()){
                    System.out.println(phone_book[i] + " : " + phone_book[j].substring(0, phone_book[i].length()));
                    if(phone_book[i].equals( phone_book[j].substring(0, phone_book[i].length()))){ answer = false; break; }
                }
                else{
                    System.out.println(phone_book[j] + " : " + phone_book[i].substring(0, phone_book[j].length()));
                    if(phone_book[j].equals( phone_book[i].substring(0, phone_book[j].length()))){ answer = false; break; }
                }
            }
        }        
        return answer;
    }


    public boolean solution4(String[] phone_book) {
        String text = String.format(" %s", String.join(" ", phone_book));
        System.out.println(text);
        
        for(String s :  text.split(String.format(" %s", "119")))
        {
            System.out.println(s);
            System.out.println("  :  ");
        }
        
        //Arrays.stream(phone_book).forEach((a)->text.split(String.format(" %s", a)));
        return !Arrays.stream(phone_book).anyMatch(s ->text.split(String.format(" %s", s)).length > 2);
    }

    public boolean solution5(String[] phone_book) {
        boolean answer = true;
        Arrays.sort(phone_book);      
        for (int i=0; i<phone_book.length-1; i++) {
            if (phone_book[i+1].startsWith(phone_book[i])) {
                answer = false;
                break;
            }
        }
        
        return answer;
    }
}