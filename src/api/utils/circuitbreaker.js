const Opossum = require('opossum');

exports.newCircuit = (method, timeout = 3000, errorThresholdPercentage = 50, resetTimeout =10000) =>{
    const circuitOptions = {
        timeout, 
        errorThresholdPercentage,
        resetTimeout,
      };
      const circuit = new Opossum(method, circuitOptions);
      circuit.fallback(_ => { message: 'it reached fallback, please try again some time later!!' } );
      circuit.fire(options).then(name => {
        response.send({ content: `Hello, ${name}`, time: new Date() });
      }).catch(logger.error);
      return circuit;
}