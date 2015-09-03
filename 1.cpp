#include<iostream>
//To compile this program and name the compiled output file, on command line, type 'g++ 1.cpp -o outputfile'
//To run, type './outputfile

int main(){
  int someInteger = 256; //+ and - integers
  //int someIntegerTwo = 0;
  short someShort;       //2 bytes -32767 to 32767
  long someLong;         //4 bytes -2,147,483,647 to 2,147,483,647
  float someFloat;       //4 bytes. 1e-38 to 1e+38
  double someDouble;     //8 bytes. 2e-308 to 1e+308
  //someIntegerTwo = someInteger++;  //post-increment. someInteger = 256
  //std::cout << someInteger << std::endl;
  //std::cout << someIntegerTwo << std::endl; 
  someInteger++;    //someInteger = 257
  someInteger *= 2; //someInteger = 257*2 = 514
  someShort = static_cast<short>(someInteger); //someShort = 514
  someLong = someShort * 10000; //5,140,000
  //std::cout << someLong  << std::endl;
  someFloat = someLong + 0.785f; //5,140,000.785
  someDouble = static_cast<double>(someFloat) / 100000; //51.4

  std::cout << someDouble  << std::endl;

  return 0;

}
