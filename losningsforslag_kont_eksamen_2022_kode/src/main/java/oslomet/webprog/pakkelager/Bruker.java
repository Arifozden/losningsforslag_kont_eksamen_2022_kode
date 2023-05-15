package oslomet.webprog.pakkelager;

/*
 * Denne POJO-klassen er ikke noe krav i løsningen
 */

public class Bruker {
    private String navn;
    private String passord;

    public Bruker(String bruker, String passord) {
        this.navn = bruker;
        this.passord = passord;
    }

    public Bruker() {}

    public String getNavn() {
        return navn;
    }

    public void setNavn(String navn) {
        this.navn = navn;
    }

    public String getPassord() {
        return passord;
    }

    public void setPassord(String passord) {
        this.passord = passord;
    }
}
