export class Funds {
    checkFunds(): boolean {
        return true;
    }

}

export class BackgroundCheck {
    criminalBackground(): boolean {
        return true;
    }

}


export class Fraud {
    checkFraud(): boolean {
        return true;
    }

}

export class MyFacade {
    private funds: Funds = new Funds();
    private backgroundCheck: BackgroundCheck = new BackgroundCheck();
    private fraud: Fraud = new Fraud();

    checkEligibility() {
        if(this.funds.checkFunds() && this.backgroundCheck.criminalBackground() && this.fraud.checkFraud()){
            console.log('Eligible!');
        }else {
            console.log('Not eligible!..');
        }
    }

}

const myFacade = new MyFacade();
myFacade.checkEligibility();

