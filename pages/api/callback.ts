import {NextApiRequest, NextApiResponse} from 'next';

async function callback(req:NextApiRequest, res:NextApiResponse) {
  try {
        
    const {method, query, body} = req;
    
    const apiSecret1 = "eyJhbGciOiJFUzI1NiJ9.eyJzdWIiOiJldXplYmlvLmFsdmVzIiwiaXNzIjoiY3N3U2VydmVyIiwiaWF0IjoxNjE4MzIwOTYyLCJhdWQiOiJjc3dWaWV3IiwiY3N3VG9rZW4iOiI1eHN2VVJhdGF4MDRjYjcxVmtLVTVRIiwiZGJOYW1lU3BhY2UiOiJzaXN0ZW1hcyJ9.DM521Keo5VokCAt1Xwqcnzx_e2DH_Sozp6gQYfcTkychN4fstu2oM8KwSzJIJFGIgRByd7Wryq1SGI4fslFAuQ";
    const apiSecret2 = "eyJhbGciOiJFUzI1NiJ9.eyJzdWIiOiJhbnltYXJrZXRwciIsImlzcyI6ImNzd1NlcnZlciIsImlhdCI6MTY0MTIxNTAxOCwiYXVkIjoiY3N3VmlldyIsImNzd1Rva2VuIjoiSmNMb0pRR3dHWHFNT09nZmRjamlPZyIsImRiTmFtZVNwYWNlIjoic2lzdGVtYXMifQ.ph_LSzwGEmYzP9IZY-dbxscf8XYbAmBuFKbXBPoxpUNGSeYbRHn1H_vjoEG-unsUy5TrO_kcVh7EuY9ebKWufw";
    
    let apiSecret=apiSecret1;
    if (query.empresa=='4') {let apiSecret=apiSecret2};

    const dados ={
      "type": body.type,
      "content":body.content
    }

    const url = 'http://csw.grupompl.com.br:5556/api/custom/v10/callbackanymarket?' + 'empresa=' + query.empresa; 

    const clienteResponse = fetch(url, {
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'empresa': query.empresa.toString(),
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