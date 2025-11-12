const contentful = require('contentful');

const client = contentful.createClient({
  space: 'yr4mlkyearqx',
  accessToken: 'bPEhfBIRvJP1dkV4_ik63X8MKfeaK5xYswcWFTtDARc'
});

client.getEntries()
  .then(response => {
    response.items.forEach(entry => {
      console.log(entry.fields.text);
    });
  })
  .catch(console.error);

  