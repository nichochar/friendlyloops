
Handlebars.registerHelper('formatDate', function(seconds) {
    return moment(seconds).format('MMMM Do YYYY');
});
