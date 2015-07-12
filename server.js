var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){
	// Let's scrape Anchorman 2
	url = 'http://www2.sabesp.com.br/mananciais/DivulgacaoSiteSabesp.aspx';

	request(url, function(error, response, html){
		if(!error){
			var $ = cheerio.load(html);
			//cleaning select inputs
			$('#cmbDia option').attr('selected', false);
			$('#cmbMes option').attr('selected', false);
			$('#cmbAno option').attr('selected', false);

			var json;
			//setting select inputs
			for (var i = 2003; i <=2015; i++) {
				for (var j = 1; j <= 12; j++) {
					for (var k = 1; k <= 31; k++) {
						//cleaning select inputs
						$('#cmbDia option').attr('selected', false);
						$('#cmbMes option').attr('selected', false);
						$('#cmbAno option').attr('selected', false);

						json = $('#tabDados').text();
					}
				}
			}
		}

		fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){
        	console.log('File successfully written! - Check your project directory for the output.json file');
        })

        res.send('Check your console!')
	})
})

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;
