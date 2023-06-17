#include <fstream>
using namespace std;

int main()
{
    int a, b, c;
    ifstream fin;
    fin.open("myinput.dat");
    fin >> a >> b;
    c = a + b;
    ofstream fout;
    fout.open("myoutput.dat");
    fout << c << endl;
    fin.close();
    fout.close();
    return 0;
}