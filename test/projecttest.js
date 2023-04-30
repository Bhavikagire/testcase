const assert = require("assert");

const exec = require("child_process").exec;

global.score = 1;


describe("Calculator", function () {

  it("should add 2 numbers", function (done) {

    exec("node index.js add 1 2", function (error, stdout, stderr) {
      assert.equal(stdout, "3\n");
    });
    done();
    global.score += 1;

  });


  it("should subtract 2 numbers", function (done) {

    exec("node index.js sub 4 2", function (error, stdout, stderr) {
      assert.equal(stdout, "2\n");
    });
    done();
    global.score += 1;

  });


  it("should multiply 2 numbers", function (done) {
    exec("node index.js mult 2 3", function (error, stdout, stderr) {
      assert.equal(stdout, "6\n");
      done();
      global.score += 1;
    });

  });


  it("should divide 2 numbers", function (done) {

    exec("node index.js divide 4 2", function (error, stdout, stderr) {
      assert.equal(stdout, "3\n");

      done();
      global.score += 1;
    });

  });


  it("should return sin of a number", function (done) {
    exec("node index.js sin 1", function (error, stdout, stderr) {
      assert.equal(stdout, Math.sin(1) + "\n");
      done();

      global.score += 1;
    });
  });

  it("should return cos of a number", function (done) {
    exec("node index.js cos 1", function (error, stdout, stderr) {
      assert.equal(stdout, Math.cos(1) + "\n");
      done();
      global.score += 1;

    });

  });

  it("should return tan of a number", function (done) {
    exec("node index.js tan 1", function (error, stdout, stderr) {
      assert.equal(stdout, Math.tan(1) + "\n");
      done();
      global.score += 1;
    });

  });


  it("should return random number of length given", function (done) {
    exec("node index.js random 16", function (error, stdout, stderr) {
      console.log("stdOut", stdout);
      // Buffer
      assert.equal(stdout.length, 17);
      done();
      global.score += 1;

    });

  });


  it("should return random number of length given", function (done) {

    exec("node index.js random 14", function (error, stdout, stderr) {

      console.log("stdOut", stdout);
    
      assert.equal(stdout.length, 15);
      done();

      global.score += 1;
    });


  });

  it("should return random number of length given", function (done) {
    exec("node index.js random 50", function (error, stdout, stderr) {

        // console.log("working")

      console.log("stdOut", stdout);

      assert.equal(stdout.length, 50);

      done();

      global.score += 1;

    });
  });

  it("should return message if no length is given for random", function (done) {

    exec("node index.js random", function (error, stdout, stderr) {

      assert.equal(stdout, "Provide length for random number generation.\n");
      done();
      global.score += 1;
    });
  });
});

afterAll(() => {
  console.log("total Score", global.score);
});