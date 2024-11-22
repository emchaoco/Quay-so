using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using System;
using System.Collections.Generic;
using System.Linq;

public class Student
{
    public int Id { get; set; }
    public string Name { get; set; }
    public int Age { get; set; }

    // Constructor
    public Student(int id, string name, int age)
    {
        Id = id;
        Name = name;
        Age = age;
    }
}

class Program
{
    static void Main(string[] args)
    {
        // Khởi tạo danh sách sinh viên
        List<Student> students = new List<Student>
        {
            new Student(1, "Hoang", 16),
            new Student(2, "Long", 14),
            new Student(3, "Khanh", 18),
            new Student(4, "Tuan", 17),
            new Student(5, "Vy", 19)
        };

        // a. In toàn bộ danh sách sinh viên
        Console.WriteLine("Danh sách toàn bộ sinh viên:");
        foreach (var student in students)
        {
            Console.WriteLine($"ID: {student.Id}, Name: {student.Name}, Age: {student.Age}");
        }

        Console.WriteLine();

        // b. Tìm sinh viên có tuổi từ 15 đến 18
        var studentsAge15to18 = students.Where(s => s.Age >= 15 && s.Age <= 18);
        Console.WriteLine("Danh sách sinh viên có tuổi từ 15 đến 18:");
        foreach (var student in studentsAge15to18)
        {
            Console.WriteLine($"ID: {student.Id}, Name: {student.Name}, Age: {student.Age}");
        }

        Console.WriteLine();

        // c. Tìm sinh viên có tên bắt đầu bằng chữ "A"
        var studentsStartingWithA = students.Where(s => s.Name.StartsWith("A"));
        Console.WriteLine("Danh sách sinh viên có tên bắt đầu bằng chữ 'A':");
        foreach (var student in studentsStartingWithA)
        {
            Console.WriteLine($"ID: {student.Id}, Name: {student.Name}, Age: {student.Age}");
        }

        Console.WriteLine();

        // d. Tính tổng tuổi của tất cả sinh viên
        int totalAge = students.Sum(s => s.Age);
        Console.WriteLine($"Tổng tuổi của tất cả sinh viên : {totalAge}");

        Console.WriteLine();

        // e. Tìm sinh viên có tuổi lớn nhất
        var oldestStudent = students.OrderByDescending(s => s.Age).First();
        Console.WriteLine("Sinh viên có tuổi lớn nhất:");
        Console.WriteLine($"ID: {oldestStudent.Id}, Name: {oldestStudent.Name}, Age: {oldestStudent.Age}");

        Console.WriteLine();

        // f. Sắp xếp danh sách sinh viên theo tuổi tăng dần
        var sortedStudents = students.OrderBy(s => s.Age);
        Console.WriteLine("Danh sách sinh viên sau khi sắp xếp theo tuổi tăng dần:");
        foreach (var student in sortedStudents)
        {
            Console.WriteLine($"ID: {student.Id}, Name: {student.Name}, Age: {student.Age}");
        }
    }
}
