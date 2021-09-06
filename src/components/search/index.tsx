import { useCallback, useState } from "react";
import "./style.scss";
interface SearchResult {
  text: string;
  id: string;
}

export const Search = ({
  search,
  onSelectResult,
  ...props
}: {
  search: (text: string) => SearchResult[];
  onSelectResult: (result: SearchResult) => void;
  [key: string]: any;
}) => {
  const [{ results, text }, setState] = useState<{
    results: SearchResult[];
    text: string;
  }>({
    results: [],
    text: "",
  });

  const onChangeText = useCallback(
    async (e) => {
      const { value: text } = e.target;
      const results = await search(text);

      setState({
        results,
        text,
      });
    },
    [search, setState]
  );

  const onSelectOption = (result: SearchResult) => {
    onSelectResult(result);

    setState({
      text: "",
      results: [],
    });
  };

  return (
    <div className="form-control search">
      <label>Search pokemon</label>
      <input type="text" {...props} onChange={onChangeText} value={text} />

      {results.length > 0 && (
        <div className="search-results">
          {results.map((r) => (
            <div onClick={() => onSelectOption(r)} key={r.id} className="result">
              {r.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
