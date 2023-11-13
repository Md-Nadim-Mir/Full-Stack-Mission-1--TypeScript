{
    // access modifier

    class BankAccount{

        constructor(public name:string , readonly id: number ,protected _balance:number , private account_details:string){
            name=this.name;
            id=this.id;
            _balance=this._balance;
            account_details=this.account_details;
        }

         set deposit(amount : number){

            this._balance=this._balance+amount;

        }

        get balance(){
            return this._balance;
        }
    }

    const GoribManus= new BankAccount('gorib ali',23,60,'general');
    GoribManus.deposit=70
    console.log(GoribManus.balance)


 

}