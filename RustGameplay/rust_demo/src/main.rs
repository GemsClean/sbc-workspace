fn main() {
    let count = 0;
    let string = "This is a string.";
    let char_vec: Vec<char> = string.chars().collect();
    let vowels = ["a", "e", "i", "o", "u"];

    for x in char_vec {
        if vowels.contains(x.to_string()) {
            count = count + 1;
        }
    }

    println!("Count: {}", count);
}