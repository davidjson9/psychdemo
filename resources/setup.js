/* Generate a random number from a bounded uniform distribution */
function get_uniform(min, max) {
    return Math.random() * (max - min) + min;
}

/* Parse CSVs as array of objects */
var adj_list = $.csv.toObjects(adj_csv).map(
    x => ({
        from: x['from'],
        to: x['to'],
        friendship: x['friendship'],
        display_left: Math.random() >= 0.5  // determine if 'from' displayed on left/right side
    })
);

var test_list = $.csv.toObjects(message_csv).map(
    x => ({
        testbed_id: x['testbed_id'],
        test_id: x['test_id'],
        startpoint: x['startpoint'],
        endpoint: x['endpoint'],
        opt1: x['option_1'],
        opt2: x['option_2'],
        display_left: Math.random() >= 0.5
    })
);

/* Map stims to underlying graph structure */
function map_stimuli(adj_list, imgs, map_how = 'equality') {
    /*
    map_how can take these values:
        random: maps images completely at random
        equality: maps equally among race/gender categories (more-or-less)
    */

    // Gets array of unique nodes
    var node_list = new Set();
    adj_list.forEach(node => {
        node_list.add(node['from'])
        node_list.add(node['to'])
    });
    node_list = Array.from(node_list);
    
    // Shuffle images
    if (map_how === 'random') {
        let imgs_all = [
            ...imgs.af, ...imgs.am,
            ...imgs.bf, ...imgs.bm,
            ...imgs.lf, ...imgs.lm,
            ...imgs.wf, ...imgs.wm
        ]
        var randomized_images = jsPsych.randomization.shuffle([...imgs_all]);
    } else if (map_how === 'equality') {
        var n_per_category = Math.round(node_list.length / 8);  // 8 = 4 racial categories x 2 gender
        var n_wf = Math.round((node_list.length - n_per_category * 6) / 2)  // handling rounding errors
        var randomized_af = jsPsych.randomization.sampleWithoutReplacement([...imgs.af], n_per_category);
        var randomized_am = jsPsych.randomization.sampleWithoutReplacement([...imgs.am], n_per_category);
        var randomized_bf = jsPsych.randomization.sampleWithoutReplacement([...imgs.bf], n_per_category);
        var randomized_bm = jsPsych.randomization.sampleWithoutReplacement([...imgs.bm], n_per_category);
        var randomized_lf = jsPsych.randomization.sampleWithoutReplacement([...imgs.lf], n_per_category);
        var randomized_lm = jsPsych.randomization.sampleWithoutReplacement([...imgs.lm], n_per_category);
        var randomized_wf = jsPsych.randomization.sampleWithoutReplacement([...imgs.wf], n_wf);
        var randomized_wm = jsPsych.randomization.sampleWithoutReplacement([...imgs.wm], (node_list.length - (n_per_category * 6) - n_wf));

        var randomized_images = jsPsych.randomization.shuffle([
            ...randomized_af, ...randomized_am,
            ...randomized_bf, ...randomized_bm,
            ...randomized_lf, ...randomized_lm,
            ...randomized_wf, ...randomized_wm
        ]);
    }

    // Mark which images to preload
    var preload_these = [...randomized_images]
    
    // Map images to nodes
    var mapping = {};
    while (node_list.length) {
        mapping[node_list.pop()] = randomized_images.pop();
    }
    
    return { mapping: mapping, preload_these: preload_these }
}

/* Create a random stimulus-to-node mapping for this particular session */
let this_mapping = map_stimuli(adj_list, imgs, 'equality')
let mapping = this_mapping.mapping
let preload_stims = this_mapping.preload_these