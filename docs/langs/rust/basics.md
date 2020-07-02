```rs
const PI: f64 = 3.14;

// Declaring mutable variables & Reassign
let mut x = 6;
x = 3;

// Shadowing, you can change the data types
let y = 4;
let y = "Shadow me!!";
let mut y = "3.33";
y = "533"; // cannot change to other data type without shadowing

// Data types Scalar & Compound

// Scalars
let guess: u32 = 43; // i8, u8, i16, u16, i32, u32, i64, u64, i128, u128
let guess: u32 = 98_222; // Hex: 0xff, Octal 0o77, Binary 0b1111_0000, Byte(u8 only): b'A'
let guess: f32 = 95.5; // f64
let guess: bool = false;
let guess: char = '🛵';

// Compound Types

// Tuples
let tup = (500, 6.4, 1);
let (x, y, z) = tup;
let x: (i32, f64, u8) = (500, 6.4, 1);
let five_hundred = x.0;
let six_point_four = x.1;
let one = x.2;

// Arrays
let a = [1, 2, 3, 4, 5, 6];
let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
let a: [i32; 5] = [1, 2, 3, 4, 5];
let a = [3; 5]; // [3, 3, 3, 3, 3]

// functions
let x = another_function(45);
println!("Function executed {}", x);

// control flow
let number = 6;

if number % 4 == 0 {
    println!("number is divisible by 4");
} else if number % 3 == 0 {
    println!("number is divisible by 3");
} else if number % 2 == 0 {
    println!("number is divisible by 2");
} else {
    println!("number is not divisible by 4, 3, or 2");
}

let condition = true; // using in direct variable assignment
let number = if condition { 5 } else { 6 };

// Loops
let mut counter = 0;

let result = loop {
    counter += 1;

    if counter == 10 {
        break counter * 2;
    }
};
println!("The result is {}", result);

// While
let mut number = 3;
while number != 0 {
    println!("{}!", number);

    number -= 1;
}
println!("LIFTOFF!!!");

// for loop
let a = [10, 20, 30, 40, 50];

for element in a.iter() {
    println!("the value is: {}", element);
}
for number in (1..4).rev() {
    println!("{}!", number);
}
println!("LIFTOFF!!!");
```
