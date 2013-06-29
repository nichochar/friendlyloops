# Handlebars register helpers here


Handlebars.registerHelper 'formatDate', (seconds) ->
    moment(seconds).format('MMMM Do YYYY')
