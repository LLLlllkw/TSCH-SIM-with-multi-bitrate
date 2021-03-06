// based on a 3600s simulation
/*
*  - is_running - Boolean flag, if set to true, the simulator will terminate
*  - network - network structure, keeps track of nodes and links
*  - timeline - has `seconds` and `asn` member variables
*  - scheduler - Orchestra or other
*  - routing - RPL or other
*  - config - configuration values from config file and the default config
*  - log - logging module
*/

/*
from the first asn, if app packet period > 0.4s, continously decrease the period simply by 2s.
*/
let callbacks = {};

function change_app_gen_period(state) {
    const node_number = 8;
     state.log.log(state.log.INFO, null, "User", `processing changing packets generation period, packet_sources period = ${state.packet_sources[0].period}`);
    if(state.packet_sources[0].period > 0.4){
	    state.log.log(state.log.INFO, null, "User", `processing changing packets generation period, current period = ${state.packet_sources[0].period}`);
	    for (let packet_source of state.packet_sources){
		packet_source.period -= 2;    
                state.log.log(state.log.INFO, null, "User", `finish changing packets generation period, current period = ${state.packet_sources[0].period}`);
	    }
    } else{
          state.log.log(state.log.INFO, null, "User", `packets generation period reaches limit, current period = ${state.packet_sources[0].period}`)
}

        return;
    }

for (let i = 1000; i < state.config.SIMULATION_DURATION_SEC * 100; i += 500) {
    callbacks[i] = change_app_gen_period;
}

/* Set the callbacks to be executed during the simulation */
return callbacks;
