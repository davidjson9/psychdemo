/* Dynamically create HTML for drawing relevant nodes in the message delivery task */
function draw_test(startpoint, endpoint, node_a, node_b, mapping, display_left) {

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
            <div class = 'flex-container' style = 'flex-direction: row;'>
                <img width="150" src="` + mapping[startpoint] + `">
                <img width="150" src="img/mail.png">
                <img width="150" src="` + mapping[endpoint] + `">
            </div>

            <p> Give letter to who? </p>

            <div class = 'flex-container' style = 'flex-direction: row;'>
                <div class = 'flex-container' style = 'flex-direction: column;'>
                    <img width="150" src="` + left_node + `">
                    <br> [ F ]
                </div>
                <div class = 'flex-container' style = 'flex-direction: column;'>
                    <img width="150" src="` + right_node + `">
                    <br> [ J ]
            </div>
        </div>
    `
}

/* Supply prompts to the HTML-creater */
var test_prompts = test_list.map(
    x => ({
        response: draw_test(
            x['startpoint'], x['endpoint'], x['opt1'], x['opt2'], mapping, x['display_left']
        )
    })
)

/* Trial template: ask participants to pick a person to pass a message */
var test_resp = {
    type: 'html-keyboard-response',
    stimulus: jsPsych.timelineVariable('response'),
    choices: ['f', 'j'],
    data: { feature: 'test_resp' }
}