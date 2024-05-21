<script lang="ts">
  let count: number = 5;

  const handleCounterIncrement = (value: number) => (count += value);
</script>

<main>
  <div class="counter">
    <h1 class="count">Counter: {count}</h1>
    <h2>Multiply x2: {count * 2}</h2>
  </div>
  <div class="container">
    <button on:click={() => handleCounterIncrement(10)} class="add">+</button>
    <button on:click={() => handleCounterIncrement(-5)} class="dis">-</button>
  </div>
</main>

<style>
  .count {
    color: mediumspringgreen;
  }

  .counter {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    margin: 0 auto;
    width: 60%;
    font-size: 3rem;
  }

  .container {
    position: fixed;
    display: flex;
    bottom: 4rem;
    width: 100%;
    justify-content: space-around;
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 100%;
    width: 5rem;
    height: 5rem;
    font-size: 2rem;
    font-weight: bold;
    box-shadow: #ddd 0.2rem 0.2rem 2rem;
    transition: all 200ms;
  }

  .add {
    background-color: aquamarine;
  }

  .add:hover {
    background-color: rgb(95, 208, 170);
  }

  .add:active {
    background-color: rgb(166, 241, 216);
  }

  .dis {
    background-color: tomato;
  }

  .dis:hover {
    background-color: rgb(218, 72, 46);
  }

  .dis:active {
    background-color: rgb(248, 123, 101);
  }
</style>
