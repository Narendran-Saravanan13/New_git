export class Fb1 {
    constructor(page) {
        this.page = page;
        this.username = page.locator('#email');
        this.password = page.locator('#pass');
        this.loginButton = page.locator('[name="login"]');
    }
    async login() {
        await this.page.goto('https://www.facebook.com/index.php');
    }
    async credentials(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }





}