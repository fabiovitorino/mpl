import {NextApiRequest, NextApiResponse} from 'next';

async function callback(req:NextApiRequest, res:NextApiResponse) {
  try {
    const apiSecret = "eyJhbGciOiJFUzI1NiJ9.eyJzdWIiOiJtYXJjdXMuYW50b25pbyIsImlzcyI6ImNzd1NlcnZlciIsImlhdCI6MTYzNTcxNTI3MiwiYXVkIjoiY3N3VmlldyIsImNzd1Rva2VuIjoiM3RPb25xS2lGZjNtcWFPRVB4azlJdyIsImRiTmFtZVNwYWNlIjoic2lzdGVtYXMifQ.ZC_NZyXxeylFJIDPXBZpCt-4Do-PDsTNvqjudcksWfe6Tcyn7mI_HxSaURdpvcAgVdkYgJy9YftaBWjNnlKTWg"
    
    const {method, query, body} = req;
    
    const dados ={
      "type": body.type,
      "content":body.content
    }

    const url = 'http://csw.grupompl.com.br:7256/api/custom/v10/callbackanymarket?' + 'empresa=' + query.empresa; 

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