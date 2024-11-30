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
        async wait(ms) {
            ms = ms || 300;
            return new Promise(resolve => {
                setTimeout(resolve, ms);
            });
        },
        addPerson() {
            if (this.name == "" || this.email == "") {
                alert("Please enter name and email");
                return;
            }
            this.names.push({ name: this.name, email: this.email });
            this.validateMails();
            this.name = "";
            this.email = "";
            this.saveList();
        },
        clearList() {
            this.names = [];
            this.saveList();
        },
        saveList() {
            localStorage.setItem("names", JSON.stringify(this.names));
            console.log(this.names);
        },

        loadList() {
            this.names = JSON.parse(localStorage.getItem("names"));
            if (this.names === null || this.names === undefined || Array.isArray(this.names) === false || this.names.length === 0) {
                this.names = [];
            }
        },

        removePerson(i) {
            this.names.splice(i, 1);
            this.saveList();
        },

        async sendEmails() {
            this.validateMails();
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
            for (const person of arr) {
                let params = {
                    name: person.name,
                    email: person.email
                }
                emailjs.send("service_n05ddqf", "template_e33dzag", params);
                await this.wait(300);
            }
            window.alert("Emails sent, merry Christmas!")
        },
        validateMails() {
            let arr = JSON.parse(JSON.stringify(this.names));
            for (let i = 0; i < arr.length; i++) {
                arr[i].email = arr[i].email.toLowerCase();
                if (!arr[i].email.includes("@")) {
                    arr[i].email = arr[i].email + "@gmail.com"
                }
            }
            this.names = arr
        }
    },
    beforeMount() {
        this.loadList();
    }
})
app.mount("#app")
