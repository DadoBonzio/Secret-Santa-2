const app = Vue.createApp({
    data() {
        return {
            message: "Hello Vue!",
            names: [],
            name: "",
            email: ""
        }
    },
    methods: {

        addPerson() {
<<<<<<< HEAD
            if(this.name == "" || this.email == "") {
=======
            if (this.name == "" || this.email == "") {
>>>>>>> 7a86233 (My Commit)
                alert("Please enter name and email");
                return;
            }
            this.names.push({ name: this.name, email: this.email });
            this.name = "";
            this.email = "";
        },
        removePerson(i) {
            this.names.splice(i, 1);
        },
<<<<<<< HEAD
                
        sendEmails() {
=======

        sendEmails() {
            this.validateMails();
>>>>>>> 7a86233 (My Commit)
            let arr = JSON.parse(JSON.stringify(this.names));
            for (let t = 0; t < new Date().getMilliseconds() % 5; t++) {
                for (let i = arr.length - 1; i > 0; i--) {
                    j = Math.floor(Math.random() * i)
                    k = arr[i]
                    arr[i] = arr[j]
                    arr[j] = k
                }
            }
            let firstNick = arr[0].name;
            for (let i = 0; i < arr.length - 1; i++) {
                arr[i].name = arr[i + 1].name;
            }
            arr[arr.length - 1].name = firstNick;
            console.log(JSON.stringify(arr));
            arr.forEach((person) => {
                let params = {
                    name: person.name,
                    email: person.email
                }
                emailjs.send("service_n05ddqf", "template_e33dzag", params);
            })
            window.alert("Emails sent, merry Christmas!")
<<<<<<< HEAD
=======
        },
        validateMails() {
            let arr = JSON.parse(JSON.stringify(this.names));
            for (let i = 0; i < arr.length; i++) {
                if (!arr[i].email.includes("@")) {
                    arr[i].email = arr[i].email + "@gmail.com"
                }
            }
            this.names = arr
>>>>>>> 7a86233 (My Commit)
        }
    }
})
app.mount("#app")
