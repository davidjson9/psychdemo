/* Dynamically create HTML for drawing relevant nodes in the learning task */
function draw_learn(node_a, node_b, friendship, mapping, display_left, print_text) {
        
    // Color-coding learning feedback
    if (print_text == 'no') {
        var print_text = '<strong style = "color: #756bb1;"> Not Friends </strong>';
    } else if (print_text == 'yes') {
        var print_text = '<strong style = "color: #31a354;"> Yes Friends </strong>';
    }

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
            <p> Friends? </p>
            <div class = 'flex-container' style = 'flex-direction: row;'>
                <img width="150" src="` + left_node + `"> 
                <img width="150" src="` + right_node + `">
            </div>
            <p> &nbsp; `+ print_text +` &nbsp; </p>
            <p> For testing: `+ friendship +` </p>
        </div>
    `
}

/* Supply prompts to the HTML-creater */
var learn_prompts = adj_list.map(
    x => ({
        prompt: draw_learn(
            x['from'], x['to'], x['friendship'], mapping, x['display_left'],
            '[ F ] No &nbsp; &nbsp; [ J ] Yes'
        ),
        resp_f: draw_learn(
            x['from'], x['to'], x['friendship'], mapping, x['display_left'],
            '<strong style = "background-color: Gold;">[ F ] No</strong> &nbsp; &nbsp; [ J ] Yes'
        ),
        resp_j: draw_learn(
            x['from'], x['to'], x['friendship'], mapping, x['display_left'],
            '[ F ] No &nbsp; &nbsp; <strong style = "background-color: Gold;">[ J ] Yes</strong>'
        ),
        feedback: draw_learn(
            x['from'], x['to'], x['friendship'], mapping, x['display_left'],
            x['friendship']
        )
    })
)

/* Trial template: ask participants to guess friendship */
var learn_guess = {
    type: 'html-keyboard-response',
    stimulus: jsPsych.timelineVariable('prompt'),
    choices: ['f', 'j']
}

/* Trial template: provide participants w/ visual feedback about what they'd guessed */
var learn_resp_f = {
    timeline: [{
        type: 'html-keyboard-response',
        stimulus: jsPsych.timelineVariable('resp_f'),
        choices: jsPsych.NO_KEYS,
        trial_duration: 250
    }],
    conditional_function: function(){
        var resp = jsPsych.data.get().last(1).values()[0];
        if(resp.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode('f')){
            return true;
        } else {
            return false;
        }
    }
}

var learn_resp_j = {
    timeline: [{
        type: 'html-keyboard-response',
        stimulus: jsPsych.timelineVariable('resp_j'),
        choices: jsPsych.NO_KEYS,
        trial_duration: 250
    }],
    conditional_function: function(){
        var resp = jsPsych.data.get().last(1).values()[0];
        if(resp.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode('j')){
            return true;
        } else {
            return false;
        }
    }
}

/* Trial template: give participants feedback about true state of friendship */
var learn_feedback = {
    type: 'html-keyboard-response',
    stimulus: jsPsych.timelineVariable('feedback'),
    choices: jsPsych.NO_KEYS,
    trial_duration: 750
}