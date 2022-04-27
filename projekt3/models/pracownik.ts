cosnt pracownikWzor = new pracownikModel.wzor({
    //id: number;
    imie: string;
    nazwisko: string;
    stanowisko: string;
})

export class pracownikModel{
    pracownik = pracownikModel.model('user', pracownikWzor);

    public saveUser(posts, callback) {
        this.pracownik.create(posts, callback)
    }

    public fetchUser(id, callback) {
        this.pracownik.findById(id, callback)
    }
}