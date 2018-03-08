module.exports = {
    'setUp': function (client){
        client.windowMaximize();
    },

/*    'Groups: Verify if group is available - Group Landing page': function (client) {
      client        
        .url('https://24467.org/groups/team-rocket')                
        .waitForElementVisible('body', 10000)        
        .verify.title('Team Rocket')
        .waitForElementVisible('div.main.border.groups-dash-full > h1', 10000)
        .verify.containsText('div.main.border.groups-dash-full > h1', 'Team Rocket')                        
        .pause(1000)        
        .end();
    },

    'Groups: Group edit URL should be redirected to Log In page': function (client) {
        client        
          .url('https://24467.org/groups/team-rocket/edit')                
          .waitForElementVisible('body', 10000)        
          .verify.urlEquals('https://24467.org/login')
          .pause(1000)                  
          .end();
    },

     'Groups: Group edit URL should be redirected to Log In page': function (client) {
        client        
          .url('https://24467.org/groups/team-rocket/edit')                
          .waitForElementVisible('body', 10000)        
          .verify.urlEquals('https://24467.org/login')
          .pause(1000)                  
          .end();
    },   

    'Groups: Log In to application using Group edit URL': function (client) {
        client        
          .url('https://24467.org/groups/team-rocket/edit')                
          .waitForElementVisible('body', 10000)
          .waitForElementVisible('#login', 10000)
          .waitForElementVisible('#password', 10000)
          .waitForElementVisible('button[type="submit"]', 10000)        
          .verify.visible('#login')
          .verify.visible('#password')
          .verify.visible('button[type="submit"]')
          .setValue('#login', 'chimpautomation+tests@gmail.com')
          .setValue('#password', 'Qwerty1234!')
          .click('button[type="submit"]')
          .pause(1000)                  
          .verify.title('Team Rocket', 'Expecting the page title to be "Team Rocket" after log in')
          .pause(2000)
          .end();
    },

    'Groups: Verify URL and elements in group edit page after login': function (client) {
        client        
          .url('https://24467.org/groups/team-rocket/edit')                
          .waitForElementVisible('body', 10000)
          .waitForElementVisible('#login', 10000)
          .waitForElementVisible('#password', 10000)
          .waitForElementVisible('button[type="submit"]', 10000)                  
          .setValue('#login', 'chimpautomation+tests@gmail.com')
          .setValue('#password', 'Qwerty1234!')
          .click('button[type="submit"]')
          .pause(1000)                  
          .verify.title('Team Rocket', 'Expecting the page title to be "Team Rocket" after log in')
          .verify.urlEquals('https://24467.org/groups/team-rocket/edit')
          .verify.elementPresent('button[data-link="/groups/team-rocket"]')
          .verify.elementPresent('button[data-link="/groups/team-rocket/edit"]')
          .verify.elementPresent('button[data-modal-toggle="modal-group-members"]')
          .verify.elementPresent('button[data-link="/groups/team-rocket/invites"]')
          .verify.elementPresent('button[data-link="/groups/team-rocket/widget"]')
          .verify.elementPresent('button[data-link="/groups/team-rocket/email_members"]')    
          .verify.containsText('div.main-full.border > div.inner > h1', 'Edit Group')
          .verify.containsText('div.main-full.border > div.inner > div:nth-child(2) > h2', 'Basic Settings')
          .verify.containsText('div.main-full.border > div.inner > div:nth-child(3) > h2', 'About The Group')
          .verify.containsText('div.main-full.border > div.inner > div:nth-child(4) > h2', 'Pics And Video')
          .verify.containsText('div.main-full.border > div.inner > div:nth-child(5) > h2', 'Charities And Goals')
          .pause(2000)
          .end();
    },

    */

    'Groups: Modify Basic Settings in group edit page': function (client) {
        client        
          .url('https://24467.org/groups/team-rocket/edit')                
          .waitForElementVisible('body', 10000)
          .waitForElementVisible('#login', 10000)
          .waitForElementVisible('#password', 10000)
          .waitForElementVisible('button[type="submit"]', 10000)                  
          .setValue('#login', 'chimpautomation+tests@gmail.com')
          .setValue('#password', 'Qwerty1234!')
          .click('button[type="submit"]')
          .pause(1000)                      
          .waitForElementVisible('div.main-full.border > div.inner > div:nth-child(2) > h2', 10000)
          .waitForElementVisible('div.main-full.border > div.inner > div:nth-child(2) > a', 10000)
          .verify.visible('div.main-full.border > div.inner > div:nth-child(2) > div.hide-click')
          .click('div.main-full.border > div.inner > div:nth-child(2) > div.hide-click')
          .waitForElementVisible('#group_name', 10000)
          .verify.visible('#group_name')
          .clearValue('#group_name')
          .setValue('#group_name', 'Team Rocket Vancouver')
          .waitForElementVisible('select#group_category_id', 10000)
          .verify.visible('select#group_category_id')
          .click('select#group_category_id option[value="333"]')
          .waitForElementVisible('#group_city', 10000)
          .verify.visible('#group_city')
          .clearValue('#group_city')
          .setValue('#group_city', 'Vancouver')
          .waitForElementVisible('#group_province', 10000)
          .verify.visible('#group_province')
          .click('select#group_province option[value="BC"]')
          .waitForElementVisible('#group_short', 10000)
          .verify.visible('#group_short')
          .clearValue('#group_short')
          .setValue('#group_short', 'Giving Group - Team Rocket Vancouver')
          .waitForElementVisible('button[type="submit"]', 10000)
          .verify.visible('button[type="submit"]')
          .click('button[type="submit"]')          
          .waitForElementVisible('.flash-msg-body > h3', 10000)
          .verify.containsText('.flash-msg-body > h3', 'Done!')
          .pause(2000)
          .end();
    },

    'Groups: Browse and upload': function (client) {
      client        
        .url('https://24467.org/groups/team-rocket/edit')                
        .waitForElementVisible('body', 10000)
        .waitForElementVisible('#login', 10000)
        .waitForElementVisible('#password', 10000)
        .waitForElementVisible('button[type="submit"]', 10000)                  
        .setValue('#login', 'chimpautomation+tests@gmail.com')
        .setValue('#password', 'Qwerty1234!')
        .click('button[type="submit"]')
        .pause(1000) 
        .click('div.main-full.border > div.inner > div:nth-child(4) > div.hide-click')
        .pause(1000)
        .setValue('input[type="file"]', require('path').resolve(__dirname + '/home/thirumurugan/Chimp_Lunch.jpg'))
        .waitForElementVisible('#group-logo-image-select-button', 10000)
        .end();
    },

    'Test if logIn button is available': function (browser) {
        browser.url('https://24467.org/login');
        browser.expect.element('a[href="/login"]').to.be.present
        browser.end();        
    },


    //Team Rocket
    //Garden & Industrial
    //Description - Fugit architecto vero aliquid reiciendis dolorem.

  };
