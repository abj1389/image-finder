import React from "react";

const useFetch = (apiUrl, password) => {

    const [info, setInfo] = React.useState(null);

    const options = {
        headers: {
            'Authorization': password
        }
    };

    // Se ejecuta una vez a la creación del componente
    React.useEffect(() => {

        apiUrl && fetch(apiUrl, options)
            .then(data => data.json())
            .then(dataParsed => setInfo(dataParsed));

    }, [apiUrl]);

    return [info];
}

export default useFetch;