#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main()
{
    ifstream inputFile("input.txt"); // Open the file for reading

    if (inputFile.is_open())
    { // Check if the file is successfully opened
        string line;
        while (getline(inputFile, line))
        {                         // Read each line from the file
            cout << line << endl; // Display the line on the console
        }
        inputFile.close(); // Close the file
    }
    else
    {
        cout << "Failed to open the file." << endl;
    }

    return 0;
}
