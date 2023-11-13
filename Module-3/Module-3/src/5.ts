{
    // access modifier

    class BankAccount{

        constructor(public name:string , readonly id: number ,protected _balance:number , private account_details:string){
            name=this.name;
            id=this.id;
            _balance=this._balance;
            account_details=this.account_details;
        }

        addBalance(deposit : number){

            this._balance=this._balance+deposit;

        }

        getBalance(){
            console.log(this._balance)
        }
    }

    const GoribManus= new BankAccount('gorib ali',23,60,'general');
    GoribManus.addBalance(50);
    GoribManus.getBalance();


    class studentAccoutn extends BankAccount{

        constructor(name:string , id:number , _balance : number , bank_details : string){
            
            super(name,_balance,id,bank_details)

        }
    }

}