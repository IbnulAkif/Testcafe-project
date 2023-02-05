import { Selector } from 'testcafe'

fixture `Getting Started`
.page `https://www.demoblaze.com/`

 
test('Valid Login test', async t => {
    await t.click("#signin2");
    await t.typeText("#sign-username","Ibnul16");
    await t.typeText("#sign-password","Ibnul16");
    //await t.click(Selector("button").withText("Sign up"));
    await t
    .setNativeDialogHandler(() => true)
    .click(Selector("button").withText("Sign up"));
    //await t.debug();
    
       
    });