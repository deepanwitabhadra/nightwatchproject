module.exports = {
  'Login test': function (client) {
    client
      .url('http://demo.automationtesting.in/Register.html')
      .waitForElementVisible('body')
      .assert.titleContains('Register')
      .windowMaximize()
      .setValue('input[ng-model=FirstName]', 'Deepanwita') //set value to first name feild
      .setValue('input[ng-model=LastName]', 'Bhadra') //set value to last name feild
      .setValue('textarea[ng-model=Adress]', 'Bangalore') //set value to  address textarea
      .setValue('input[type=email]', 'zing123@gmail.com') //set value to email feild
      .setValue('input[type=tel]', '9000100010')//set value to mobileNo
      .element('xpath', '//*[contains(@value,"FeMale")]', function (response) {
        client.elementIdSelected(response.value.ELEMENT, function (result) {
          console.log("logging value" + result.value)
          client.assert.equal(result.value, false, 'Radio Button selected');

        })// assering the if Radio button already checked
      })
      .click('xpath', '//*[contains(@value,"FeMale")]')// clicking on the Female radio button
      .click('xpath', '//*[@id="checkbox1"]')//click on checkbox
      .click('select[id="Skills"] option[value="C"]') //Select Skill C
      .click('xpath','//*[@class="select2-selection select2-selection--single"]')//click on the country dropdown ,search will appear
      .setValue('xpath','//*[@class="select2-search__field"]','india')// send country name on the search bar
      .keys(client.Keys.ENTER)// clcik enter to persist country 
      .click('select[id="countries"] option[value="India"]')// select country in the dropdown
      .click('select[id="yearbox"] option[value="1994"]')//Select your year
      .click('select[ng-model="monthbox"] option[value="May"]')//Select your Month
      .click('select[id="daybox"] option[value="5"]')//Select your day
      .setValue('input[id=firstpassword]', 'Test1234')//Set password value in firstpassword
      .setValue('input[id=secondpassword]', 'Test1234')//Set password value in Secondpassword
      .click('xpath','//*[@id="msdd"]')//click on the multiselect dropdown
      .waitForElementVisible('ul')// waiting for the ul tag
      .click('xpath','//*[@id="basicBootstrapForm"]//li/a[contains(text(),"Arabic")]')//Select language from multiselect
      .click('xpath','//*[@id="basicBootstrapForm"]//li/a[contains(text(),"Greek")]')//Select language from multiselect
      .pause(5000)
      .click('xpath','//*[@id="submitbtn"]')
      .waitForElementVisible('body')
      .assert.titleContains('Web Table')//Asert title of landing page



  }
};