import {NextApiRequest, NextApiResponse} from 'next';

async function callback(req:NextApiRequest, res:NextApiResponse) {
  try {
    const apiSecret = "eyJhbGciOiJFUzI1NiJ9.eyJzdWIiOiJldXplYmlvLmFsdmVzIiwiaXNzIjoiY3N3U2VydmVyIiwiaWF0IjoxNjE4MzIwOTYyLCJhdWQiOiJjc3dWaWV3IiwiY3N3VG9rZW4iOiI1eHN2VVJhdGF4MDRjYjcxVmtLVTVRIiwiZGJOYW1lU3BhY2UiOiJzaXN0ZW1hcyJ9.DM521Keo5VokCAt1Xwqcnzx_e2DH_Sozp6gQYfcTkychN4fstu2oM8KwSzJIJFGIgRByd7Wryq1SGI4fslFAuQ"
    
    const {method, query, body} = req;
    
    const dados ={
      "type": body.type,
      "content":body.content
    }

    const url = 'http://csw.grupompl.com.br:5556/api/custom/v10/callbackanymarket?' + 'empresa=' + query.empresa; 

    const clienteResponse = fetch(url, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'empresa': '1',
          'Authorization': apiSecret
      },
      body: JSON.stringify(dados),
    })
    
    const clienteResponseJson = (await clienteResponse).json;

    if ((await clienteResponse).ok) {
      res.status(200).json(
        {clienteResponseJson}
      )
    }
    else {
      throw new Error("Erro retorno!");
    }

  
  } catch (error) {
    res.status(405).json({statusCode:500, message: error.message})
  }

}

export default callback;