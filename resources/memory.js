/* Dynamically create HTML for drawing relevant nodes in the memory task */
function draw_memory(node_a, node_b, friendship, mapping, display_left, print_text, header_text) {

    // Dictate which node is drawn on the left
    if (display_left) {
        var left_node = mapping[node_a];
        var right_node = mapping[node_b];
    } else {
        var left_node = mapping[node_b];
        var right_node = mapping[node_a];
    }
    
    return `
        <div class = 'flex-container' style = 'flex-direction: column; width: 700px; font-size: 200%;'>
            <p> `+ header_text +` </p>
            <div class = 'flex-container' style = 'flex-direction: row;'>
                <img width="150" src="` + left_node + `"> 
                <img width="150" src="` + right_node + `">
            </div>
            <p style = 'font-size: 75%;'> &nbsp; `+ print_text +` &nbsp; </p>
            <p> For testing: `+ friendship +` </p>
        </div>
    `
}

/* Supply prompts to the HTML-creater */
var memory_prompts = adj_list.map(
    x => ({
        response: draw_memory(
            x['from'], x['to'], x['friendship'], mapping, x['display_left'],
            '[ F ] No &nbsp; &nbsp; [ J ] Yes',
            'Friends?'
            ),
        confidence: draw_memory(
            x['from'], x['to'], x['friendship'], mapping, x['display_left'],
            '[S] Very Unsure &nbsp; [D] Unsure &nbsp; [K] Sure &nbsp; [L] Very Sure',
            'How sure are you?'
        )
    })
)

/* Trial template: ask participants to remember friendship */
var memory_resp = {
    type: 'html-keyboard-response',
    stimulus: jsPsych.timelineVariable('response'),
    choices: ['f', 'j']
}

/* Trial template: ask participants to indicate confidence */
var memory_conf = {
    type: 'html-keyboard-response',
    stimulus: jsPsych.timelineVariable('confidence'),
    choices: ['s', 'd', 'k', 'l']
}